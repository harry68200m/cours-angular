export class AppareilService  {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOn(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOff(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
