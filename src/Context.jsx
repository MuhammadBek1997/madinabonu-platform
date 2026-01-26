import React, { createContext, useContext, useEffect, useState } from 'react'



const AppContext = createContext()

const AppProvider = ({ children }) => {


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const [sToggle, setsToggle] = useState('')


    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })


    // darkmode button bosilganda chiqadigan pastgi menyu uchun yozilgan
    const [openTheme, setOpenTheme] = useState(false)
    const handleChangeTheme = (T) => {
        setTheme(T)
        setOpenTheme(false)
    }
    // tugadi


    useState(() => {

    }, [])

    const saveInfo = () => {
        setUser({ name: name, surname: surname })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("theme", theme)
    }, [theme, user])

    let courses = [
        {
            id: 1,
            img: "/images/fotoTeacher.png",
            name: "Rahmonberdiev G'iyos",
            subject: "Fizika",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },

        {
            id: 2,
            img: "/images/davrbekU.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 3,
            img: "/images/foto1.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/foto2.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/foto3.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/foto4.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/foto5.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/rohila.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/otabek.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/kimyo.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/huquq.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/husniddin.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/sardoraka.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/matematika.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/zuxraopa.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            img: "/images/biologiya.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: "Kurs davomiyligi: 12soat",
            achievements: " Yutuqlar: Hali mavjud emas",
            GroupPhotos: "Guruh rasmlar: Mavjud emas",
            WorkExperience: " Ish tajribasi: 100yil",
            students: "O'quvchilar soni: Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        }




    ];






    return (
        <AppContext.Provider value={{
           courses,
            setsToggle, sToggle,
            openTheme, setOpenTheme, handleChangeTheme, theme, saveInfo,
            user, surname, setName, setSurname, setTheme, 
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider
