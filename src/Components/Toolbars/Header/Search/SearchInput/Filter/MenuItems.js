import { faBars, faLocationArrow, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const MenuItems = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faLocationArrow} />,
        title: "Khu vực",
        children: [
            {
                id: 1,
                title: "Quận Ba Đình",
                
            },
            {
                id: 2,
                title: "Quận Cầu Giấy",
                
            },
            {
                id: 3,
                title: "Quận Hà Đông",
                
            },
            {
                id: 4,
                title: "Quận Hoàn Kiếm",
                
            },
            {
                id: 5,
                title: "Quận Long Biên",
                
            },
            {
                id: 6,
                title: "Quận Bắc Từ Liêm",
                
            },
            {
                id: 7,
                title: "Quận Đống Đa",
                
            },
            {
                id: 8,
                title: "Quận Hai Bà Trưng",
                
            },
            {
                id: 9,
                title: "Quận Hoàng Mai",
                
            },
            {
                id: 10,
                title: "Quận Nam Từ Liêm",
                
            },
            {
                id: 11,
                title: "Quận Tây Hồ",
                
            }
        ]
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faUtensils} />,
        title: "Ẩm thực",
        children: [
            {
                id: 1,
                title: "Món Việt",
                subItems: [
                    {
                        id: 1,
                        title: "Món Miền Nam",
                        
                    },
                    {
                        id: 2,
                        title: "Món Miền Trung",
                        
                    },
                    {
                        id: 3,
                        title: "Món Miền Bắc",
                        
                    },
                    {
                        id: 4,
                        title: "Tây Nguyên",
                        
                    },
                ]
            }, 
            {
                id: 2,
                title: "Món Á",
                subItems: [
                    {
                        id: 1,
                        title: "Món Hàn",
                        
                    },
                    {
                        id: 2,
                        title: "Món Nhật",
                        
                    },
                    {
                        id: 3,
                        title: "Món Trung Hoa",
                        
                    },
                    {
                        id: 4,
                        title: "Món Thái",
                        
                    },
                ]
            },
            {
                id: 3,
                title: "Món Âu",
                subItems: [
                    {
                        id: 1,
                        title: "Pháp",
                        
                    },
                    {
                        id: 2,
                        title: "Đức",
                        
                    },
                    {
                        id: 3,
                        title: "Thụy Sĩ",
                        
                    },
                    {
                        id: 4,
                        title: "Ý",
                        
                    },
                    {
                        id: 5,
                        title: "Tây Ban Nha",
                        
                    },
                    {
                        id: 6,
                        title: "Bánh Pizza",
                        
                    },
                ]
            },
            {
                id: 4,
                title: "Châu Mỹ",
                subItems: [
                    {
                        id: 1,
                        title: "Mỹ",
                        
                    },
                    {
                        id: 2,
                        title: "Mexico",
                        
                    },
                    {
                        id: 3,
                        title: "Argentina",
                        
                    },
                    {
                        id: 4,
                        title: "Brazil",
                        
                    },
                    {
                        id: 5,
                        title: "Canada",
                        
                    },
                ] 
            },
            {
                id: 5,
                title: "Quốc tế",
                
            },
            {
                id: 6,
                title: "Đông Âu",
                subItems: [
                    {
                        id: 1,
                        title: "Thổ Nhĩ Kì",
                        
                    },
                    {
                        id: 2,
                        title: "Séc",
                        
                    }
                ]
            },
            {
                id: 7,
                title: "Úc",
                
            }
        ]
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faBars} />,
        title: "Phân loại",
        children: [
            {
                id: 1,
                title: "Sang trọng",
                
            },
            {
                id: 2,
                title: "Nhà hàng",
                
            },
            {
                id: 3,
                title: "Ăn chay",
                
            },
            {
                id: 4,
                title: "Quán ăn",
                
            },
            {
                id: 5,
                title: "Buffet",
                
            },
            {
                id: 6,
                title: "Ăn vặt/Vỉa hè",
                
            },
            {
                id: 7,
                title: "Café/Dessert",
                
            },
            {
                id: 8,
                title: "Bar/Pub",
                
            },
            {
                id: 9,
                title: "Quán nhậu",
                
            },
            {
                id: 10,
                title: "Tiệm bánh",
                
            }
        ]
    }
]