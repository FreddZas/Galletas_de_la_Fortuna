const LastPage = ({data}) => {
    
     return(
        <>
            <article className="last-page" >
                <h1 className="title">GALLETAS DE LA FORTUNA</h1>
                <div className="container">
                    <div className="phrase">
                        <p> "{data.phrase}" </p>
                    </div>
                </div>
                <div className="author">
                        <p> Fuente: {data.author}  </p>
                </div>

            </article>
        </>
     )
 }
 
 export default LastPage