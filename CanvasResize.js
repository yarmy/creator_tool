cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    start () {
        this.resize();
    },
    
    // 适配 
    resize() {
    
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        //保存原始设计分辨率，供屏幕大小变化时使用
        if(!this.curDR){
            this.curDR = cvs.designResolution;
        }
        var dr = this.curDR;
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;
    
        if((rw/rh) > (dr.width / dr.height)){
            //!#zh: 是否优先将设计分辨率高度撑满视图高度。 */
            //cvs.fitHeight = true;
            
            //如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw/rh;
        }
        else{
            /*!#zh: 是否优先将设计分辨率宽度撑满视图宽度。 */
            //cvs.fitWidth = true;
            //如果更短，则用定宽
            finalW = dr.width;
            finalH = rh/rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
        cvs.node.emit('resize');

        //3.0
        // var cvs = find('Canvas').getComponent(Canvas);
        // //保存原始设计分辨率，供屏幕大小变化时使用
        // if (!this._designResolution) {

        //         this._designResolution = cvs.getComponent(UITransform).contentSize
        //     }

        //     var dr = this._designResolution;
        //     var s = view.getFrameSize();
        //     var rw = s.width;
        //     var rh = s.height;
        //     var finalW = rw;
        //     var finalH = rh;

        //     if ((rw / rh) > (dr.width / dr.height)) {
        //         finalH = dr.height;
        //         finalW = finalH * rw / rh;
        //     }
        //     else {
        //         finalW = dr.width;
        //         finalH = rh / rw * finalW;
        //     }

        //     view.setDesignResolutionSize(Math.abs(finalW), Math.abs(finalH), 0);
        //     cvs.node.emit('resize');
        // }
    },

    // update (dt) {},
});
