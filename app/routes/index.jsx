export const loader = async ({request, context}) => {
  console.log("-- LOADER --")
  console.log('context.env: ', context?.env)
  return null
}

export default function Index() {
  return "Hi!"
}
