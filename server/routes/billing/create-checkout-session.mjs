import { creem } from "../../config/creem.mjs";

const getProduct = (id) => {
    switch (id) {
        case "newyork-7-days":
            return process.env.NEW_YORK_TEST_KEY;
        case "amsterdam-3-days":
            return process.env.AMSTERDAM_TEST_KEY;
        default:
            return null;
    }
}

export default async function checkoutSessionRoute(fastify) {

    fastify.post("/create-checkout-session", async (request, reply) => {

        const { product_id_client } = request.body;
        if (!product_id_client) {
            request.log.warn("Client product ID missing");
            return reply.status(400).send({
                ok: false,
                error: "Client product ID missing",
            });
        }

        const product_id = getProduct(product_id_client);
        if (!product_id) {
            request.log.warn("Server product ID missing");
            return reply.status(400).send({
                ok: false,
                error: "Server product ID missing",
            });
        }

        try {
            const checkout = await creem.checkouts.create({
                productId: product_id,
                successUrl: "https://github.com/Danilo-Masi", // TO UPDATE
            });

            return reply.send({
                ok: true,
                url: checkout.checkoutUrl,
            });

        } catch (err) {
            request.log.error({ err }, "Internal server error");
            return reply.status(500).send({
                ok: false,
                error: "Server error",
            });
        }
    });
}