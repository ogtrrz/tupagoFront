import { signIn, signOut, useSession } from "next-auth/react";

export default function ClientSideAuth() {
  // const url = `https://${oktaOrgURL}/oauth2/v1/authorize?client_id=${clientId}&response_type=id_token&scope=openid&prompt=none&redirect_uri=http://localhost:3000&state=Af0ifjslDkj&nonce=${uuid.v4()}&sessionToken=${session.sessionToken}`
  const oktaUrl =
    "https://dev-96373045.okta.com/oauth2/default/v1/authorize?response_type=code&client_id=0oabhue3dcIe5dsM95d7&scope=openid%20profile%20email&state=zYvMuYwLKppJOIQkOGWGL-RVQcGTIRQTpgv32H3ZPSk%3D&redirect_uri=http://localhost:3000/login/oauth2/code/oidc&nonce=ZTnsdjV5WPM8Rey76MMgWvy0GmQfVasuGOPm5OCwRA8";

  return (
    <>
      <p>Hola</p>
      <a href={oktaUrl}>title="Okta"</a>
    </>
  );
  // const { data: session, status } = useSession()

  // if(status === 'loading'){
  //     return (
  //         <>
  //             Loading...
  //         </>
  //     )
  // }

  // if (session) {
  //     return (
  //         <>
  //             You have logged in <button onClick={() => signOut()}>Sign out</button>
  //         </>
  //     )
  // }
  // return (
  //     <>
  //         Not Logged In <button onClick={() => signIn()}>Sign in</button>
  //     </>
  // )
}

// Router.push(url);
