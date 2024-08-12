import Layout from "@/components/layout";

export default function NewProduct () {
    return(
        <Layout>
        <h1>New Product</h1>
            <input type="text" placeholder="Product name"></input>
            <textarea type="text" placeholder="Product description"></textarea>
        </Layout>
    );
}