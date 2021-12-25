
export const loader = async ({ request, context }) => {
  console.log("LOADER")
  console.log("context.env: ", context?.env)
  console.log("MY_ENV_VAR: ", MY_ENV_VAR)
}

export default function Index() {
  return "Hi!"
}
