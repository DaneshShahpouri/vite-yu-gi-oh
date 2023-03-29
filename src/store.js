import { reactive } from 'vue';


export const store = reactive({
    ApiArray: [],

    ApiArrayLoader: false,
    // ApiCall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    ApiCall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',

    inputValue: '',

    isVisibleInfo: false,
    isHoverMain: false,
    isHovermini: false,
    DontFuond: false,

    // GLOBALINDEX
    isAnimatePrev: false,
    isAnimatePost: false,


    globalIndexPrevPrev: 48,
    globalIndexPrev: 49,

    globalIndex: 0,

    globalIndexPost: 1,
    globalIndexPostPost: 2,
    // fine GLOBALINDEX
});
