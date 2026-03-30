import Link from "next/link";
export default function nav(){
      console.log('WHERE ?')
    return(
        <>
           <h1>Welcome to the Home Page</h1>
           <ul>
            <li>
              <Link href="/user">users</Link>
            </li>
             <li>
              <Link href="/contact">contact</Link>
            </li>
           </ul>
        </>
    )
}