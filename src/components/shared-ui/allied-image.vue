<template>
  <q-img loading="lazy" :src="defaultPath" :srcset="sourceSet" :alt="altValue" :style="imgStyle" />
</template>

<script setup lang="ts">
// Product contains the path on the cdn, provided by the appserver. 
// ItemFormat contains dimensions/css classes for eac hype of product
import { defineComponent, PropType, ref, withDefaults, defineProps } from "vue";
import { useImageKit } from '@/plugins/imagekit'

const props = withDefaults(defineProps<{
  imgUrl?: string,
  title?: string,
  desiredWidth?: number,
  desiredHeight?: number,
}>(), {
  imgUrl: '',
  title: '',
  desiredWidth: 400,
  desiredHeight: 428,
});

//   props: {
//     item: { type: Object as PropType<Product>, required: true },
//     title: { type: String as PropType<string>, default: "" },
//     thumbnail: { type: Boolean, default: false },
//   },

    // let desiredWidth = 535;
    // let desiredHeight = 618;

    // let desiredWidth = 400;
    // let desiredHeight = 428;
    // const format = formatWithId(props.item.formatId || 0)
    // if (format !== undefined) {
    //   if (props.thumbnail) {
    //     desiredWidth = props.item.imageVertical ? format.thumbWidthV : format.thumbWidth
    //     desiredHeight = props.item.imageVertical ? format.thumbHeightV : format.thumbHeight
    //   } else {
    //     desiredWidth = props.item.imageVertical ? format.imgWidthV : format.imgWidth
    //     desiredHeight = props.item.imageVertical ? format.imgHeightV : format.imgHeight
    //   }
    // }

    const altValue = ref(props.title)
    if (props.title.length < 1) {
      altValue.value = `image of product`
    }

    const ik = useImageKit()
    const x1trans = {
      width: props.desiredWidth.toString(),
      height: props.desiredHeight.toString(),
      dpr: "1",
    //   crop_mode: "pad_resize",
    //   background: "#F3F3F3",
    }

    const x2trans = { ...x1trans, dpr: "2" }
    const x1url = ik.url({ path: props.imgUrl, transformation: [x1trans] })
    const defaultPath = ref(x1url)
    const x2url = ik.url({ path: props.imgUrl, transformation: [x2trans] })
    const sourceSet = ref(`${x1url}, ${x2url} 2x `)
    const imgStyle = ref(`width: ${props.desiredWidth}px`)
    console.log(ik, x1url, x2url, sourceSet, imgStyle);
    
</script>