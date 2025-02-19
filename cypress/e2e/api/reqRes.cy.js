describe('ReqRes CRUD', () => {

    //variaveis
    let firstName
    let lastName
    let userId

    context('Listagem de usuários', () => {
        it('Obtém uma lista de usuários', () => {
            cy.request({
                method: 'GET',
                url: '/api/users'
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.data[0].id).not.be.null
                userId = body.data[0].id
                firstName = body.data[0].first_name
                lastName = body.data[0].last_name
            })
        })
        it('Obtém um usuário', () => {
            cy.request({
                method: 'GET',
                url: `/api/users/${userId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.data.first_name).to.eq(firstName)
                expect(body.data.last_name).to.eq(lastName)
            })
        })
    })
})