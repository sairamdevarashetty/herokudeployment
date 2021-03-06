
export default function StaticImage ({ title=[], backgroundImg }) {
    return (
        <section className="header-image" style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className="container h-100">
                <div className="title-header">
                <h1>
                    {
                        title.map((text) => (
                            <>
                            <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>
                                    {text}
                                </font>
                            </font>
                            <br />
                            </>
                        ))
                    }
                </h1>
                </div>
            </div>
        </section>
    )
}