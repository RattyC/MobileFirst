tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#123A29',     // เขียวเข้ม
                        accent: '#EFCF9C',      // ครีมทอง
                        beige: '#D9D4CB',       // เบจ
                        softgray: '#CFD0BF',    // เทาอ่อน
                        dark: '#212121',        // ดำเข้ม
                        light: '#FAFAFA'        // ขาวเทา
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif']
                    },
                    animation: {
                        fade: 'fadeIn 1s ease-out both'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: 0, transform: 'translateY(20px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                    }
                }
            }
        }