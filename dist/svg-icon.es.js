import { defineComponent, ref, onMounted, watch, openBlock, createElementBlock } from "vue";
const _hoisted_1 = ["viewBox", "innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    iconClass: {
      type: [Promise],
      default: ""
    },
    clickStop: {
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const clickHanle = (e) => {
      props.clickStop && e.stopPropagation();
      emit("click", e);
    };
    const viewBox = ref("0 0 1024 1024");
    const svgContent = ref("");
    let svgModuleDefault = "";
    const reflashSvg = async () => {
      try {
        let svgModule = await props.iconClass;
        svgModuleDefault = svgModule.default;
      } catch (error) {
        console.error("can not find svg file");
        return;
      }
      if (!/.+svg.+svg.+/.test(svgModuleDefault)) {
        console.error("import file is not a svg file");
        return;
      } else {
        const svgEl = document.createElement("div");
        svgEl.innerHTML = svgModuleDefault;
        viewBox.value = svgEl.children[0].getAttribute("viewBox") || "0 0 1024 1024";
        svgContent.value = svgEl.getElementsByTagName("svg")[0].innerHTML;
      }
    };
    onMounted(reflashSvg);
    watch(() => props.iconClass, reflashSvg);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: viewBox.value,
        "aria-hidden": "true",
        innerHTML: svgContent.value,
        style: { "height": "1em", "overflow": "hidden", "vertical-align": "-0.15em", "width": "1em" },
        onClick: clickHanle
      }, null, 8, _hoisted_1);
    };
  }
});
export { _sfc_main as default };
