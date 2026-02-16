import React, { createContext, useContext, useEffect, useState } from 'react'



const AppContext = createContext()

const AppProvider = ({ children }) => {


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const [sToggle, setsToggle] = useState(true)


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
            name: "Rahmonberdiev ",
            subject: "Fizika",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },

        {
            id: 2,
            img: "/images/davrbekU.png",
            name: "Xolmatov Davrbek",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 3,
            img: "/images/foto1.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 4,
            img: "/images/foto2.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 5,
            img: "/images/foto3.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 6,
            img: "/images/foto4.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 7,
            img: "/images/foto5.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 8,
            img: "/images/rohila.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 9,
            img: "/images/otabek.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 10,
            img: "/images/kimyo.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 11,
            img: "/images/huquq.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 12,
            img: "/images/husniddin.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 13,
            img: "/images/sardoraka.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 14,
            img: "/images/matematika.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 15,
            img: "/images/zuxraopa.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
            AboutTeacher: "Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
        },
        {
            id: 16,
            img: "/images/biologiya.png",
            name: "Teacher Name",
            subject: "Subject Name",
            courses: " 12soat",
            achievements: "  Hali mavjud emas",
            GroupPhotos: " Mavjud emas",
            WorkExperience: "  100yil",
            students: " Fitfilyonta",
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
