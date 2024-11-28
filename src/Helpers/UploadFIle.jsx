import { toast } from "react-toastify";

const uploadFile = async (filePath) => {

    const file = filePath
    if (!file) {
        console.error('No file selected.');
        toast.warning('No file selected.');
        return;
    }

    const form = new FormData();
    form.append("image", file);

    try {
        const res = await fetch('https://api.imgbb.com/1/upload?key=862850e874b9b92bba3bbba84383b4dd', {
            method: "POST",
            body: form
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json(); 
        return data.data.url;

    } catch (error) {
        console.error('Upload failed:', error);
        toast.error('Upload failed:', error);
    }
};

export default uploadFile