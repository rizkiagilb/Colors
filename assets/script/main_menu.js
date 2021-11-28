// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        play: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.play.node.on('click', function(){
            cek();
            cc.director.loadScene('level_menu');
        });
    },

    // update (dt) {},

    var: cek = function(){
        console.log("tes");
        //alert("test");
    },


});
