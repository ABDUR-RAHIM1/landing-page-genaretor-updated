import { AiFillProduct } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { GrFavorite, GrMultiple } from "react-icons/gr";
import { MdEditCalendar, MdOutlineProductionQuantityLimits, MdStarBorderPurple500 } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";

import images from "../../constans/Constans";

const features = [
    {
        id: 1,
        title: "Responsive এবং User-Friendly",
        icon: <FaMobileAlt />,
        image: images.home.responsive,
        description: "এ আর আইটি সল্যুশনস আপনার ব্যবসার জন্য সবচেয়ে সহজ এবং দক্ষ ল্যান্ডিং পেজ জেনারেটর। এই প্ল্যাটফর্মটি সম্পূর্ণ Responsive, অর্থাৎ মোবাইল, ট্যাবলেট এবং ডেক্সটপে আপনার পেজগুলো সুন্দরভাবে প্রদর্শিত হবে। Mobile-Friendly Design ফিচারটি নিশ্চিত করবে যে যেকোনো ডিভাইসে আপনার পেজ সহজে ব্যবহারযোগ্য হবে।"
    },
    {
        id: 2,
        title: "মাত্র এক ক্লিকেই ল্যান্ডিং পেজ তৈরি",
        icon: <GiClick />,
        image: images.home.landing,
        description: "কোনো কোডিং জ্ঞান ছাড়াই মাত্র এক ক্লিকেই আকর্ষণীয় ল্যান্ডিং পেজ তৈরি করুন। One-Click Landing Page Creation ফিচারের মাধ্যমে দ্রুত এবং সহজে আপনার পণ্য বা সেবা প্রদর্শন করতে পারবেন।"
    },
    {
        id: 3,
        title: "একাধিক পেজ তৈরি",
        icon: <GrMultiple />,
        image: images.home.multipelPage,
        description: "পণ্যের ভিন্নতা তুলে ধরতে বা ক্যাম্পেইনের জন্য একাধিক পেজ তৈরি করতে পারবেন। Multiple Page Creation ফিচারটি আপনার ব্যবসাকে দ্রুত সম্প্রসারণ করতে সহায়তা করবে।"
    },
    {
        id: 4,
        title: "অর্ডার বিস্তারিত এবং ব্যবস্থাপনা",
        icon: <MdStarBorderPurple500 />,
        image: images.home.orders,
        description: "প্ল্যাটফর্মের মাধ্যমে আপনার অর্ডারের বিস্তারিত তথ্য দেখা এবং পরিচালনা করা সহজ হবে। অর্ডার ডিটেইলস দেখা, প্রক্রিয়াকরণ এবং ডেলিভারি ম্যানেজমেন্ট করতে পারবেন।"
    },
    {
        id: 5,
        title: "পণ্যের তথ্য এবং বিস্তারিত",
        icon: <AiFillProduct />,
        image: images.home.product,
        description: "প্রতিটি পণ্যের ফিচার, মূল্য এবং অন্যান্য তথ্য সহজেই শেয়ার করুন। Product Information সেকশনের মাধ্যমে গ্রাহকরা সঠিক সিদ্ধান্ত নিতে পারবেন।"
    },
    {
        id: 6,
        title: "অর্ডার ভিত্তিক পেজ তৈরি",
        icon: <MdOutlineProductionQuantityLimits />,
        image: images.home.orderFor,
        description: "গ্রাহকরা তাদের প্রয়োজন অনুযায়ী অর্ডার করতে পারবেন এবং সেই অনুযায়ী পেজ কাস্টমাইজ করতে পারবেন। Order-Based Page Creation ফিচারটি গ্রাহকদের জন্য সঠিক তথ্য প্রদানে সহায়ক।"
    },
    {
        id: 7,
        title: "সহজ কনটেন্ট কাস্টমাইজেশন",
        icon: <MdEditCalendar />,
        image: images.home.costomization,
        description: "পেজের প্রতিটি সেকশন সহজেই কাস্টমাইজ করতে পারবেন। প্রোডাক্টের বিবরণ, ছবি এবং টেক্সট আপডেট করতে পারবেন, যা আপনাকে সময় বাঁচাতে সাহায্য করবে।"
    },
    {
        id: 8,
        title: "দ্রুত লোড টাইম",
        icon: <SlSpeedometer />,
        image: images.home.load,
        description: "আপনার ল্যান্ডিং পেজগুলি দ্রুত লোড হওয়ার জন্য অপ্টিমাইজ করা হয়েছে, যা ব্যবহারকারীর অভিজ্ঞতা বাড়ায়।"
    },
    {
        id: 9,
        title: "কেন AR It Solutions?",
        icon: <GrFavorite />,
        image: images.home.why,
        description: "এ আর আইটি সল্যুশনস আপনার ব্যবসার সবকিছু সহজে এবং দক্ষভাবে পরিচালনা করতে সহায়ক। এটি আপনার সময়, টাকা এবং প্রচেষ্টাকে আরও কার্যকরভাবে ব্যবহার করতে সাহায্য করবে।"
    }
];


export default features