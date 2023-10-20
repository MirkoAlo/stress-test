export const onRequest = async (context, next) => {

    // aspetto il risultato
    const response = await next()

    if (!context.url.pathname.includes('include')) {
        return response
    }

    return new Response(
        response.text ? (await response.text()).replace('<!DOCTYPE html>', '') : response.body, response
    )
};