import ImageKit from "imagekit-javascript"
import { imagekitKey, imagekitUrl } from '../constants/secrets'

declare global {
  interface Window { alliedImageKit?: ImageKit }
}

export const useImageKit = ()  => {
  let ik = window.alliedImageKit
  if (ik === undefined) {
    ik = new ImageKit({ publicKey: imagekitKey as string, urlEndpoint: "https://ik.imagekit.io/kosidevimage"})
    window.alliedImageKit = ik
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return ik
}