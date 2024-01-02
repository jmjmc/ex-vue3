import { defineStore } from 'pinia';
// pinia 에 있는 defineStore 를 사용

// 외부에서 stores를 사용할 수 있도록 export 함 (defineStore로 정의함, 첫번째 매개변수 id값:'counter', 두번째 매개변수: store 와 관련된 옵션 { } )
// 관례 : store 이름도 composable 함수와 마찬가지로 use 로 시작하는 네임밍으로 할 것 
// defineStore 함수의 첫 번째 매개변수의 문자열('counter') 는 애플리케이션 전체에서 store의 고유한 id 임 (view devtool 를 연결할 때 사용 )
// pinia 옵션은 세 가지로 구성되어 있음 1. state 2. getters 3. actions  (한 컴포넌트에 있는 것을 저장소에 분리하여 운영)
// state 는 컴포넌트의 상태, getters 는 컴포넌트의 computed , actions 는 컴포넌트의 method 역할을 함 

// state 는 객체를 반환하는 함수를 사용할 수 있음 
export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 1,
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        increment() {
            this.counter++;
        },
    },
});