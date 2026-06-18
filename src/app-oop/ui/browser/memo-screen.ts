export class MemoScreen {
    //속성
    private me: MemoScreen;
    //메소드
    constructor() {
        this.me = null;
    }
    setMe(me: MemoScreen) {
        this.me = me;
    }
    
    showGrettingMessage() {
        document.getElementById("gretting-message").innerText = `#{this.me.username}님의 메모장`
    }
}