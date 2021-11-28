// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        back: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.back.node.on('click', function(){
            cc.director.loadScene('main_menu');
            
        });
    },
    

    // update (dt) {},


    selectLevel: function(event, index){
        cc.director.loadScene('level'+String(index))
    },

});
