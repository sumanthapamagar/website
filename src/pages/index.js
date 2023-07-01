import * as React from "react";

import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Layout from "../components/layout";
const IndexPage = () => {
    const { width } = useWindowDimensions();

    const [nameStyles, setNameStyles] = React.useState({ fontSize: 100 });

    React.useEffect(() => {
        setNameStyles({ fontSize: Math.floor(width / 8) });
    }, [width]);

    return (
        <Layout>
            <div style={{ padding: "50px 40px" }}>
                <span
                    className="inline bg-gradient-to-r from-indigo-100 via-sky-400 to-indigo-500 bg-clip-text font-light tracking-tight text-transparent"
                    style={nameStyles}
                >
                    Suman
                    <br />
                    Thapa Magar
                </span>
            </div>
            <section className="text-center lg:py-8">
                <a href="mailto:hello@sumanthapamagar.com">
                    hello@sumanthapamagar.com
                </a>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Suman Thapa Magar</title>;
