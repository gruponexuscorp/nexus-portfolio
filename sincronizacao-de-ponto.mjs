import assert from "node:assert/strict"

function sincronizarMarcacao(registros, marcacao) {
  const existente = registros.get(marcacao.id)
  if (existente === undefined) {
    registros.set(marcacao.id, Object.freeze({ ...marcacao }))
    return "registrada"
  }

  if (existente.tipo !== marcacao.tipo || existente.horario !== marcacao.horario) {
    return "conflito"
  }

  return "ja_registrada"
}

const registros = new Map()
const marcacaoOffline = {
  id: "demo-entrada",
  tipo: "entrada",
  horario: "2030-01-15T08:00:00Z",
}

assert.equal(sincronizarMarcacao(registros, marcacaoOffline), "registrada")

// O app usa o ID original quando precisa repetir o envio.
assert.equal(sincronizarMarcacao(registros, { ...marcacaoOffline }), "ja_registrada")

const marcacaoAlterada = { ...marcacaoOffline, horario: "2030-01-15T08:10:00Z" }
assert.equal(sincronizarMarcacao(registros, marcacaoAlterada), "conflito")

assert.equal(registros.size, 1)
assert.deepEqual(registros.get(marcacaoOffline.id), marcacaoOffline)

console.log("Uma marcação registrada. O reenvio e o conflito preservaram o registro original.")
