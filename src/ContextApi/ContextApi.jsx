import React, { createContext, useEffect, useState } from 'react'
import initialFormState from '../Data/FormData';
import { BASE_URL } from '../API/Api';
import orderFormState from '../Data/OrderFormState';
import { toast } from 'react-toastify';
import uploadFile from '../Helpers/UploadFIle';
import Cookies from 'js-cookie';

export const formContext = createContext()

export default function ContextApi({ children }) {

    const [token, setToken] = useState(Cookies.get('pageToken'));
    const [user, setUser] = useState(Cookies.get('pageUser') ? JSON.parse(Cookies.get('pageUser')) : null);

    useEffect(() => {
        const storedToken = Cookies.get('pageToken');
        const storedUser = Cookies.get('pageUser');

        if (storedToken) setToken(storedToken);
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = (token, user) => {
        setToken(token);
        setUser(user);
        Cookies.set("pageToken", token, { expires: 7 });
        Cookies.set("pageUser", JSON.stringify(user), { expires: 7 });
    };

    const logout = () => {
        Cookies.remove('pageToken');
        Cookies.remove('pageUser');
        setToken(null);
        setUser(null);
    };

    //  token , user , auth end here

    const [pageDetails, setPageDetails] = useState(null)
    // 1
    const [loading, setLoading] = useState(false)
    const [isDone, setIsDone] = useState(null)
    const [imgLoading, setImgLoading] = useState(false)
    const [formData, setFormData] = useState(initialFormState);

    const [logo, setLogo] = useState("")
    const [productImg, setProductImg] = useState("")
    const [subProductImg, setSubProductImg] = useState([])
    const [reviewImgs, setReviewImgs] = useState([])

    const [quote, setQuote] = useState([])
    const [acordion, setAcordion] = useState([])
    const [about, setAbout] = useState([]);
    const [orderForm, setOrderForm] = useState(orderFormState)




    //  2 for add page nested form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        const path = name.split('.');

        setFormData((prevState) => {
            let state = { ...prevState };
            let current = state;

            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }

            current[path[path.length - 1]] = value;
            return state;
        });
    }


    const handleUploadFile = async (filePath) => {
        try {
            setImgLoading(true)
            const { name, file } = filePath
            const imgurl = await uploadFile(file);

            switch (name) {
                case "logo":
                    setLogo(imgurl)
                    break;

                case "product":
                    setProductImg(imgurl)
                    break;

                default:
                    console.warn(`Unhandled info.name: ${info.name}`);
                    break;
            }
        } catch (error) {
            console.log(error)
            toast.error("Error uploading file!")
        } finally {
            setImgLoading(false)
        }

    }

    const handleMultipleFile = async (files) => {
        const { name, value } = files;
        setImgLoading(true)
        try {
            if (!value || value.length === 0) {
                console.error("No files selected.");
                toast.error("No files selected!")
                return;
            }

            const imgUrls = [];


            for (const file of value) {
                const imgUrl = await uploadFile(file);
                if (imgUrl) {
                    imgUrls.push(imgUrl);
                }
            }

            switch (name) {
                case "subImage":
                    setSubProductImg(imgUrls)
                    break;

                case "review":
                    setReviewImgs(imgUrls)
                    break;

                default:
                    console.warn(`Unhandled name: ${name}`);
                    toast.error(`Unhandled name: ${name}`)
                    break;
            }


        } catch (error) {
            console.error("Error uploading files:", error);
            toast.error("Error uploading file!")
        } finally {
            setImgLoading(false)
        }
    };


    const handleUpdateState = (info) => {

        switch (info.name) {
            case "quote":
                setQuote([...quote, info.value])
                break;

            case "acordion":
                setAcordion([...acordion, info.value])
                break;

            case "about":
                setAbout([...about, info.value])
                break;

            default:
                console.warn(`Unhandled info.name: ${info.name}`);
                toast.error(`Unhandled info.name: ${info.name}`)
                break;
        }
    }

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            hero: {
                ...prev.hero,
                logo: logo
            },
            product: {
                ...prev.product,
                image: productImg,
                quote: quote
            },
            acordion: {
                ...prev.acordion,
                acordions: acordion
            },
            subProduct: {
                ...prev.subProduct,
                about: about,
                image: subProductImg
            },
            review: {
                ...prev.review,
                images: reviewImgs
            },
        }))
    }, [logo, productImg, subProductImg, reviewImgs, quote, acordion, about])

    //  page context start



    const [userInfo, setUserInfo] = useState({
        user: {},
        page: []
    })
    const [page, setPage] = useState({})

    //  get user , who login 
    const getUser = async () => {
        isDone === null ? setLoading(true) : setLoading(false)
        try {
            const res = await fetch(`${BASE_URL}/user/one`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await res.json();

            const user = {
                name: data.name,
                email: data.email,
                username: data.username,
                _id: data._id
            }
            setUserInfo({
                ...userInfo,
                user: user,
                page: data.pages,
                orders: data.orders

            })
        } catch (error) {
            console.log(error.message)
            toast.error("failed to fetch Page")
        } finally {
            setLoading(false)
        }

    }
    //  page create
    const handleCreatePage = (e) => {
        e.preventDefault()
        setLoading(true)
        const createPage = async () => {
            try {
                const res = await fetch(`${BASE_URL}/page/create`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify(formData)
                });

                const result = await res.json();
                result.ok ? toast.success(result.message) : toast.error("Could not be Fatching")
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        createPage()
    }

    // edit page
    const handleEditPage = async (pageId) => {

        try {
            const response = await fetch(`${BASE_URL}/page/one/${pageId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            response.ok ? toast.success("Page Updated") : toast.error("Could not be updated")
        } catch (error) {
            toast.error("Could not be updated")
            console.log(error)
        }
    }

    //  delete page 
    const handleDeletePage = (pageId) => {

        const deletePage = async () => {
            try {
                const res = await fetch(`${BASE_URL}/page/delete/${pageId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });

                const result = await res.json();

                result.ok ? toast.success(result.message) : toast.error(result.message)
                setIsDone(!isDone)
            } catch (error) {
                console.log(error.message)
                toast.error("Failed to delete")
            }
        }

        deletePage()

    }

    //  get page details with username and _id
    const getPageDetails = async (id, username) => {
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/page/one/${username}/${id}`);
            const data = await res.json();

            setPage(data)
        } catch (error) {
            console.log(error)
            toast.error("Failed To fetch!")
        } finally {
            setLoading(false)
        }
    }

    // orders start

    const createOrder = async (orderForm) => {
        try {
            const response = await fetch(`${BASE_URL}/order/create`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(orderForm)
            });

            const result = await response.json();

            result.ok ? toast.success(result.message) : toast.error(result.message)
        } catch (error) {
            console.log(error.message)
            toast.error("Failed to submit Order")
        }
    }


    // orders end

    //  get colors form localstorage
    const [colors, setColors] = useState({})

    useEffect(() => {
        const isColors = localStorage.getItem("colors");
        if (isColors) {
            const colors = JSON.parse(isColors)
            setColors(colors)
        }
    }, [])

    const colorStyles = {
        background: `linear-gradient(180deg, ${colors.primaryBgColor}, ${colors.secondaryBgColor})`,
        color: colors.primaryTextColor,
    };
  


    const value = {

        token, user, login, logout,

        pageDetails, setPageDetails,
        loading, imgLoading,
      /* 1 */  formData, setFormData,
       /* 2 */  handleChange, handleUploadFile, handleUpdateState, handleMultipleFile,

        /* page details start*/
        getUser, userInfo,
        handleCreatePage, handleEditPage, handleDeletePage, isDone, setIsDone,
        getPageDetails, page,
        /* page details end*/

        // 69  order start
        orderForm, setOrderForm, createOrder,
        //  order end

        colors, colorStyles


    }

    return (
        <formContext.Provider value={value}>
            {children}
        </formContext.Provider>
    )
}
