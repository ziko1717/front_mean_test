export class Contact {
    nom: string;
    num_tel: string;
    prenom: string;
    constructor(contact: Contact) {
        contact.num_tel = '';
        contact.nom =  '';
        contact.prenom = '';
    }
  }