import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
  breakpoints: {
    zero: 0,
   mobile: 426,
   tablet: 821,
   laptop:2500,
   tv: 6000

  },
})

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia
export default function A(){
  return <p></p>
}