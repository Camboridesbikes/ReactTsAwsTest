"use strict";
(self.webpackChunktest = self.webpackChunktest || []).push([[401], { 5401: function (e, t, i) {
            "use strict";
            i.r(t), i.d(t, { amplify_picker: function () { return r; } });
            var n = i(3922), p = i(3139), c = i(5489), r = function () { function e(e) { (0, n.r)(this, e), this.pickerText = c.T.PICKER_TEXT, this.acceptValue = "*/*"; } return e.prototype.render = function () { var e = this; return (0, n.h)("div", { class: "picker" }, (0, n.h)("slot", { name: "picker" }, (0, n.h)("amplify-button", null, p.o.get(this.pickerText))), (0, n.h)("input", { title: p.o.get(this.pickerText), type: "file", accept: this.acceptValue, onChange: function (t) { return e.inputHandler(t); } })); }, e; }();
            r.style = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";
        } }]);
