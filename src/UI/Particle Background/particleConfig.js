const particleConfig = {
    autoPlay: true,
    background: {
        color: {
            value: "#232741"
        },
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "20%",
        opacity: 1
    },
    backgroundMask: {
        composite: "destination-out",
        cover: {
            color: {
                value: "#fff"
            },
            opacity: 1
        },
        enable: false
    },
    clear: true,
    fullScreen: {
        enable: true,
        zIndex: 0
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "repulse"
            },
            onHover: {
                enable: true,
                mode: "bubble"
            },
            resize: {
                enable: true
            }
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0
            },
            repulse: {
                distance: 400,
                duration: 0.4
            }
        }
    },
    particles: {
        bounce: {
            horizontal: {
                value: 1
            },
            vertical: {
                value: 1
            }
        },
        collisions: {
            enable: false
        },
        color: {
            value: "#ffffff"
        },
        move: {
            angle: {
                value: 90
            },
            direction: "none",
            enable: true,
            outModes: {
                default: "out"
            },
            random: false,
            speed: {
                min: 0.1,
                max: 1
            },
            straight: false
        },
        number: {
            density: {
                enable: true,
                width: 1920,
                height: 1080
            },
            value: 160
        },
        opacity: {
            value: {
                min: 0.1,
                max: 1
            },
            animation: {
                enable: true,
                speed: 1,
                startValue: "random"
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: {
                min: 1,
                max: 3
            }
        }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true
};

export default particleConfig;
