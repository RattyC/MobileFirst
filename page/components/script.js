tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1e1e2f',
                        accent: '#f0c040',
                        light: '#f9f9f9',
                        dark: '#212121'
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif']
                    },
                    animation: {
                        fade: 'fadeIn 0.8s ease-out',
                        bounceIn: 'bounceIn 0.6s ease-in-out'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: 0 },
                            '100%': { opacity: 1 }
                        },
                        bounceIn: {
                            '0%': { transform: 'scale(0.95)', opacity: 0 },
                            '80%': { transform: 'scale(1.05)', opacity: 1 },
                            '100%': { transform: 'scale(1)', opacity: 1 }
                        }
                    }
                }
            }
        };
