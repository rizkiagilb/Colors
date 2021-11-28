// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        colors : {
            default: [],
            type: [cc.Color]
        },
        shape : {
            default: [],
            type: [cc.Node]
        },
        thumb_color: cc.Node,
    },

    ctor: function(){
        this.selectedColor = 2;
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    clickColor: function(event, indexColor){
        this.selectedColor = indexColor;
    },

    clickShape: function(event, index){
        if (index < this.shape.length) {
            this.shape[index].color = this.colors[this.selectedColor];
        }
    },

    update (dt) {
        this.thumb_color.color = this.colors[this.selectedColor];
    },



    back: function(event, index){
        if(index == 0){
            cc.director.loadScene('level_menu');
        }else if(index == 1){
            cc.director.loadScene('main_menu');
        }
    },






});
