exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("92a5cefa", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("972f00e0", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("28f1127f", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GameBlock.vue?vue&type=template&id=10e9b508&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gamewrap"},[_vm._ssrNode("<section class=\"gamewrap__gameblock\" data-v-10e9b508>","</section>",_vm._l((_vm.rows),function(row,index){return _c('BonesRow',{key:index,attrs:{"itemsPerRow":row,"onGameHandler":_vm.onGameHandler}})}),1),_vm._ssrNode(" <section class=\"gamewrap__tools\" data-v-10e9b508><p class=\"gamewrap__tools_rules\" data-v-10e9b508>\n      Правила:<br data-v-10e9b508>\n      Необходимо упорядочить номера в блоке\n      <span data-v-10e9b508>горизотнально</span> или\n      <span data-v-10e9b508>вертикально</span>.<br data-v-10e9b508>\n      Чтоб начать игру, нажмите &quot;Сбросить и начать игру&quot;\n    </p> <button type=\"button\" class=\"gamewrap__tools_startBtn\" data-v-10e9b508>\n      Сбросить и начать игру\n    </button> <p data-v-10e9b508>"+_vm._ssrEscape("Прошло времени: "+_vm._s(_vm.time.toLocaleTimeString()))+"</p> "+((_vm.win && !_vm.start)?("<div class=\"gamewrap__tools_finishMessage\" data-v-10e9b508>\n      Вы выиграли!\n    </div>"):"<!---->")+"</section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GameBlock.vue?vue&type=template&id=10e9b508&scoped=true&

// EXTERNAL MODULE: ./components/BonesRow.vue + 4 modules
var BonesRow = __webpack_require__(29);

// CONCATENATED MODULE: ./helpers/onGameHandler.js
/* harmony default export */ var onGameHandler = ((rows, rowNum, cellNum, updatedNum) => {
  const isEmptyCellInCurrentRow = rows[rowNum].find(item => item.num === "");

  if (isEmptyCellInCurrentRow) {
    // если пустая ячейка в строке, где был клик
    const emptyCellNum = isEmptyCellInCurrentRow.cell;

    if (emptyCellNum - 1 === cellNum || emptyCellNum + 1 === cellNum) {
      rows[rowNum].forEach(item => {
        if (item.cell === emptyCellNum) item.num = updatedNum;
        if (item.cell === cellNum) item.num = "";
      });
    }
  } else {
    switch (rowNum) {
      case 0:
        // если клик по ячейке в первой строке
        {
          const isEmptyCellInNextRow = rows[rowNum + 1].find(item => item.num === "");

          if (isEmptyCellInNextRow) {
            const emptyCellNum = isEmptyCellInNextRow.cell;
            if (emptyCellNum !== cellNum) return;
            rows[rowNum].forEach(item => {
              if (item.cell === cellNum) item.num = "";
            });
            rows[rowNum + 1].forEach(item => {
              if (item.cell === cellNum) item.num = updatedNum;
            });
          }
        }
        break;

      case 3:
        // если клик по ячейке в четвертой строке
        {
          const isEmptyCellInPrevRow = rows[rowNum - 1].find(item => item.num === "");

          if (isEmptyCellInPrevRow) {
            const emptyCellNum = isEmptyCellInPrevRow.cell;
            if (emptyCellNum !== cellNum) return;
            rows[rowNum].forEach(item => {
              if (item.cell === cellNum) item.num = "";
            });
            rows[rowNum - 1].forEach(item => {
              if (item.cell === cellNum) item.num = updatedNum;
            });
            return;
          }
        }
        break;

      case 1:
      case 2:
        // если клик по ячейке во второй или третьей строке
        {
          const isEmptyCellInPrevRow = rows[rowNum - 1].find(item => item.num === "");

          if (isEmptyCellInPrevRow) {
            const emptyCellNum = isEmptyCellInPrevRow.cell;
            if (emptyCellNum !== cellNum) return;
            rows[rowNum].forEach(item => {
              if (item.cell === cellNum) item.num = "";
            });
            rows[rowNum - 1].forEach(item => {
              if (item.cell === cellNum) item.num = updatedNum;
            });
            return;
          }

          const isEmptyCellInNextRow = rows[rowNum + 1].find(item => item.num === "");

          if (isEmptyCellInNextRow) {
            const emptyCellNum = isEmptyCellInNextRow.cell;
            if (emptyCellNum !== cellNum) return;
            rows[rowNum].forEach(item => {
              if (item.cell === cellNum) item.num = "";
            });
            rows[rowNum + 1].forEach(item => {
              if (item.cell === cellNum) item.num = updatedNum;
            });
          }
        }
        break;

      default:
        return;
    }
  }
});
// EXTERNAL MODULE: ./store/dataForGame.js
var dataForGame = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GameBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var GameBlockvue_type_script_lang_js_ = ({
  components: {
    BonesRow: BonesRow["default"]
  },

  data() {
    return {
      rows: JSON.parse(JSON.stringify(dataForGame["horData"])),
      templateHor: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""],
      templateVert: [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, ""],
      win: false,
      start: false,
      time: null,
      timer: false
    };
  },

  created() {
    this.time = new Date(0, 0, 0);
  },

  methods: {
    onGameHandler(e, rowNum, cellNum) {
      if (e.path[0].className !== "row__bone_item" || this.start === false || this.win === true && this.start === false) {
        return;
      }

      const updatedNum = Number(e.path[0].innerHTML);
      onGameHandler(this.rows, rowNum, cellNum, updatedNum);
      const identRowsData = this.rows.flat().map(el => el.num);
      let isCorrectHorNums = true;
      let isCorrectVertNums = true;
      identRowsData.forEach((el, index) => {
        if (el !== this.templateHor[index]) isCorrectHorNums = false;
        if (el !== this.templateVert[index]) isCorrectVertNums = false;
      });

      if (isCorrectHorNums || isCorrectVertNums) {
        this.win = true;
        this.start = false;
        clearInterval(this.timer);
      }
    },

    getMixData() {
      this.win = false;
      this.start = true;
      this.time = new Date(0, 0, 0);
      this.rows.sort(() => Math.random() - 0.5);
      this.rows.forEach(arr => arr.sort(() => Math.random() - 0.5));
      this.rows.forEach((data, index) => {
        data.forEach((item, i) => {
          item.row = index;
          item.cell = i;
        });
      });
      this.timer = setInterval(() => {
        this.time = new Date(this.time.setSeconds(this.time.getSeconds() + 1));
      }, 1000);
    },

    getViewData(viewtype) {
      this.start = false;
      this.win = false;
      clearInterval(this.timer);
      this.time = new Date(0, 0, 0);

      if (viewtype === "vert") {
        this.rows = JSON.parse(JSON.stringify(dataForGame["vertData"]));
      } else if (viewtype === "hor") {
        this.rows = JSON.parse(JSON.stringify(dataForGame["horData"]));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/GameBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GameBlockvue_type_script_lang_js_ = (GameBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GameBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GameBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10e9b508",
  "5ba85e72"
  
)

/* harmony default export */ var GameBlock = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BonesRow: __webpack_require__(29).default})


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BonesRow.vue?vue&type=template&id=eb19d266&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode((_vm._ssrList((_vm.itemsPerRow),function(item){return ("<div class=\"row__bone\" data-v-eb19d266>"+((item.num)?("<span class=\"row__bone_item\" data-v-eb19d266>"+_vm._ssrEscape("\n      "+_vm._s(item.num)+"\n    ")+"</span>"):"<!---->")+"</div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BonesRow.vue?vue&type=template&id=eb19d266&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BonesRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BonesRowvue_type_script_lang_js_ = ({
  props: {
    itemsPerRow: {
      type: Array,
      required: true
    },
    onGameHandler: {
      type: Function,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/BonesRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BonesRowvue_type_script_lang_js_ = (BonesRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BonesRow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BonesRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "eb19d266",
  "7cd153cf"
  
)

/* harmony default export */ var BonesRow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BonesRow_vue_vue_type_style_index_0_id_eb19d266_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BonesRow_vue_vue_type_style_index_0_id_eb19d266_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BonesRow_vue_vue_type_style_index_0_id_eb19d266_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BonesRow_vue_vue_type_style_index_0_id_eb19d266_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BonesRow_vue_vue_type_style_index_0_id_eb19d266_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".row[data-v-eb19d266]{height:100px;display:flex;width:100%}.row__bone[data-v-eb19d266]{outline:1px solid red;width:100px}.row__bone span[data-v-eb19d266]{display:inline-block;width:100%;height:100%;background-color:#ff0;cursor:pointer;line-height:100px;text-align:center;font-size:30px}.row__bone span[data-v-eb19d266]:hover{background-color:#ffffe0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameBlock_vue_vue_type_style_index_0_id_10e9b508_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameBlock_vue_vue_type_style_index_0_id_10e9b508_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameBlock_vue_vue_type_style_index_0_id_10e9b508_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameBlock_vue_vue_type_style_index_0_id_10e9b508_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameBlock_vue_vue_type_style_index_0_id_10e9b508_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gamewrap[data-v-10e9b508]{display:flex}.gamewrap__gameblock[data-v-10e9b508]{width:400px;height:400px;background-color:#000}.gamewrap__tools[data-v-10e9b508]{padding:0 10px}.gamewrap__tools_rules[data-v-10e9b508]{font-size:14px;margin-bottom:20px}.gamewrap__tools_rules span[data-v-10e9b508]{color:#00f;cursor:pointer;text-decoration:underline}.gamewrap__tools_startBtn[data-v-10e9b508]{display:inline-block;padding:10px 20px;border:none;background-color:red;color:#fff;text-transform:uppercase;cursor:pointer;border-radius:5px;margin-bottom:20px}.gamewrap__tools_startBtn[data-v-10e9b508]:hover{text-decoration:underline}.gamewrap__tools_finishMessage[data-v-10e9b508]{display:inline-block;padding:20px 40px;color:#fff;background-color:#00f;border-radius:10px;margin-top:20px;font-weight:800}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{background-color:#add8e6;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4acf8972&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('GameBlock')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4acf8972&

// EXTERNAL MODULE: ./components/GameBlock.vue + 5 modules
var GameBlock = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    GameBlock: GameBlock["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "78b2acb8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GameBlock: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=index.js.map