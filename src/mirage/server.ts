import { createServer, Model } from 'miragejs'

// @ts-ignore
const verbList = [
  'avoir',
  'être',
  'aller',
  'faire',
  'pouvoir',
  'partir',
  'vouloir',
  'prendre',
  'voir',
  'venir',
  'devoir',
  'manger',
  'savoir',
  'dire',
  'mettre',
  'finir',
  'lire',
  'sortir',
  'parler',
  'aimer',
  'boire',
  'recevoir',
  'choisir',
  'dormir',
  'connaître',
  'attendre',
  'écrire',
  'envoyer',
  'jouer',
  'falloir'
]


export default function makeServer () {
    createServer({

        models: {
            verb: Model,
        },

        seeds(server) {
            // @ts-ignore
            verbList.forEach((verb) => {
                server.create('verb', { name: verb }) 
            });
        },

        routes() {
            this.namespace = 'api'

            this.get('/verbs', function (schema, request){
                // @ts-ignore
                return schema.verbs.all();
                // return {
                //     data: {
                //         verbs: [...verbList]
                //     }
                // }
            })
        }
    })
}
