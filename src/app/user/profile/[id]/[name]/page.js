
export default async function username({params, searchParams}) {

  const id =(await params).id;
   const name=(await params).name;
  const query = await searchParams;
  console.log(query);
  return (
    <>
     <h1>{id} is the id, {name} is the name</h1>
      
    </>
  );
}
