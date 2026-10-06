import type { HttpContext } from '@adonisjs/core/http'

export default class UjiansController {
    async login({ view }: HttpContext) {
    

    return view.render('pages-new/Login', {  })
    }

    async register({ view }: HttpContext) {
    
        // Logika buat ngesave user

    return view.render('pages-new/Register', {  })
    }
    async registerPost() {
        return 'ok';
    }
}

