

export const colors = {
    'black': '#171717',
    'black-light': '#343434',
    'black-dark': '#000000',
    'black-navy': '#191a21',
    
    "xs-dark-gray": "#5A5A5A",
    "dark-gray": "#9E9E9E",
    "medium-gray": "#AFAFAF",
    "gray": "#C4C4C4",
    "light-gray": "#C6C6C6",
    "xs-light-gray": "#DFDFDF",
    "xxs-light-gray": "#F2F2F2",
    "soft-white": "#EEEEEE",
    
    "green": "#28a746",
    "green-dark": "#156a29",
    "green_1": "#009F74",
    "green_2": "#00B987",
    "green_3": "#19C496",
    "green-light": "#84ce94",
    "green_4": "#50D8B3",
    "green_5": "#83E6B8",
    
    // blue
    "blue_1": "#091929",
    "blue_2": "#051445",
    "blue_3": "#0A203E",
    "blue_4": "#01284E",
    "blue_5": "#004283",
    "blue-dark": "#1a389e",
    "blue_9": "#0058FF",
    "blue": "#3360fa",
    "blue_6": "#1564B2",
    "blue_7": "#0E76DD",
    "blue_8": "#2693FF",
    "blue_10": "#2693F9",
    "blue-light": "#3390fa",
    'blue-gray-soft': '#E5EAEDFF',
    "blue-gray-light": "rgb(244,247,250)",
    "navy": "#526dd0",
    
    // pastel
    "pastel_1": "#FFCD41",
    "pastel_2": "#FDD565",
    "pastel_3": "#FFE08B",
    "pastel_4": "#ffebb4",
    
    'golden': '#F5B508',
    'golden-light': '#FFC94E',
    'golden-dark': '#D59810',
    
    // orange
    "orange-medium": "#F77C00",
    "orange_1": "#FA720E",
    "orange_2": "#F58635",
    "orange-light": "#F7B500",
    "orange_3": "#FDAF77",
    
    // yellow
    "yellow_1": "#F09D00",
    "yellow_2": "#FFC400",
    "yellow_3": "#FDCC34",
    "yellow_4": "#FDCC25",
    "yellow_5": "#FFD800",
    "yellow_6": "#EBDC62",
    
    // pink
    "pink_1": "#FF0062",
    "pink_2": "#FF5093",
    "pink_3": "#FF93BC",
    
    // purple
    "purple_1": "#6459be",
    "purple_2": "#7062E6",
    "purple_3": "rgb(149, 138, 242)",
    
    "red": "#E60018",
    "red_1": "#560015",
    "red_2": "#9f0322",
    "red-medium": "#c51628",
    "red_4": "#b82341",
    "red-light": "#e74364",
    "red_6": "#ff4155",
    
    
    "disabled": "#C6C6C6",
    'error': "#ff4155",
};

export const themes = {
    'normal': {
        default: colors.black,
        border: "transparent",
        hover: colors["black-light"],
        active: colors["black-dark"],
        fontColor: "white"
    },
    "gray": {
        default: colors.gray,
        border: "transparent",
        hover: colors["medium-gray"],
        active: colors["light-gray"],
        fontColor: "white",
    },
    "grayTransparent": {
        default: "transparent",
        border: "transparent",
        hover: colors["xxs-light-gray"],
        active: colors["xs-light-gray"],
        fontColor: colors["gray_3"],
    },
    "disabled": {
        default: colors.gray,
        border: "transparent",
        hover: colors.gray,
        active: colors.gray,
        fontColor: colors["dark-gray"]
    },
    "bordered": {
        default: 'transparent',
        border: "black",
        hover: colors["xxs-light-gray"],
        active: colors["xs-light-gray"],
        fontColor: "black"
    },
    "transparent": {
        default: 'transparent',
        border: "transparent",
        hover: 'transparent',
        active: 'transparent',
        fontColor: "white"
    },
    "red": {
        default: colors.red,
        border: "transparent",
        hover: colors["red-light"],
        active: colors["red-medium"],
        fontColor: "white"
    },
    "blue": {
        default: colors.blue,
        border: "transparent",
        hover: colors["blue-gray-light"],
        active: colors["blue-dark"],
        fontColor: "white",
    },
    
    "darkBlue": {
        default: colors["blue_4"],
        border: "transparent",
        hover: colors["blue_3"],
        active: colors["blue_2"],
        fontColor: "white",
    },
    "purple": {
        default: colors["purple_3"],
        border: "transparent",
        hover: colors["purple_2"],
        active: colors["purple_1"],
        fontColor: "white",
    },
    "darkPurple": {
        default: colors["purple_1"],
        border: "transparent",
        hover: colors["purple_2"],
        active: colors["purple_1"],
        fontColor: "white",
    },
    "pastel": {
        default: colors["pastel_3"],
        border: "transparent",
        hover: colors["pastel_2"],
        active: colors["pastel_1"],
        fontColor: colors["black"],
    },
    "green": {
        default: colors["green_1"],
        border: "transparent",
        hover: colors["green_2"],
        active: colors["green_3"],
        fontColor: "white",
    },
    "orange": {
        default: colors["orange_2"],
        border: "transparent",
        hover: colors["orange_1"],
        active: colors["orange_3"],
        fontColor: "white",
    },
    "pink": {
        default: colors["pink_2"],
        border: "transparent",
        hover: colors["pink_1"],
        active: colors["pink_3"],
        fontColor: "white",
    },
    "black": {
        default: "black",
        border: "transparent",
        hover: "black",
        active: "black",
        fontColor: "white"
    },
    "white": {
        default: "white",
        border: "transparent",
        hover: "white",
        active: colors["gray_4"],
        fontColor: "black"
    }
}

