export const experimental_ppr = true;

export default async function StartupDetailsPage({params}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;

  return (<>
    <h2>{ id } - Testing</h2>
  </>)
}
