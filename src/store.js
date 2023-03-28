import { reactive } from 'vue';


export const store = reactive({
    ApiArray: [],

    isVisibleInfo: true,

    // GLOBALINDEX
    isAnimatePrev: false,
    isAnimatePost: false,


    globalIndexPrevPrev: 0,
    globalIndexPrev: 1,

    globalIndex: 2,

    globalIndexPost: 3,
    globalIndexPostPost: 4,
    // fine GLOBALINDEX
});
