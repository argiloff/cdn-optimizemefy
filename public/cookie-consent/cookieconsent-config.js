/**
 * Alle Konfigurationsoptionen sind hier verfügbar:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
window.addEventListener("load", function(){
  document.documentElement.classList.add('cc--light-funky');
  CookieConsent.run({

    cookie: {
        name: 'cc_cookie',
    },

    guiOptions: {
        consentModal: {
            layout: 'box wide',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'bar wide',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    categories: {
         necessary: {
            readOnly: true,
            enabled: true
        },
      	analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^(_ga|_ga_43TG8834BK|_ga_YH9EXZL2QG)/
                    }
                ]
            }
        },
        ads: {}
    },

    language: {
        default: 'de',
        translations: {
            de: {
                consentModal: {
                    title: 'Diese Webseite verwendet Cookies',
                    description: 'Wir verwenden Cookies, um Ihnen ein besseres Nutzererlebnis zu bieten. Durch die Nutzung unserer Webseite stimmen Sie der Verwendung von Cookies zu. Außerdem verwenden wir Google Analytics zur Analyse des Nutzerverhaltens. Wenn Sie auf "Alle akzeptieren" klicken, stimmen Sie auch dieser Art der Nachverfolgung zu.',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Nur notwendige akzeptieren',
                    showPreferencesBtn: 'Individuelle Einstellungen',
                    footer: `
                        <a href="https://presenterra.blog/impressum/" target="_blank">Impressum</a>
                        <a href="https://presenterra.blog/datenschutz/" target="_blank">Datenschutzerklärung</a>
                    `,
                },
                preferencesModal: {
                    title: 'Cookie-Einstellungen verwalten',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Nur notwendige akzeptieren',
                    savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
                    closeIconLabel: 'Schließen',
                    serviceCounterLabel: 'Dienst|Dienste',
                    sections: [
                        {
                            title: 'Ihre Datenschutzoptionen',
                            description: `In diesem Bereich können Sie einige Präferenzen bezüglich der Verarbeitung Ihrer persönlichen Daten angeben. Sie können Ihre getroffenen Entscheidungen jederzeit überprüfen und ändern, indem Sie diesen Bereich über den bereitgestellten Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen spezifischen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Schalter aus oder verwenden Sie die Schaltfläche „Alle ablehnen“ und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`,
                        },
                        {
                            title: 'Unbedingt erforderlich',
                            description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Webseite unerlässlich und können nicht deaktiviert werden.',

                            linkedCategory: 'necessary',
                          	cookieTable: {
                                caption: 'cc_cookie',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    path: 'Path',
                          			expirationDate: 'Ablaufdatum',
                          			purpose: 'Zweck'
                                },
                                body: [
                                    {
                                        name: 'cc_cookie',
                                        domain: 'presenterra.blog',
                                        path: '/',
                                        expirationDate: '2025-01-13T11:54:39.000Z',
                                        purpose: 'Speichert die Zustimmung des Benutzers zur Verwendung von Cookies',
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Leistung und Analyse',
                            description: 'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.',
                            linkedCategory: 'analytics',
                          
                         	cookieTable: {
                                caption: 'Tabelle für Cookies',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    path: 'Path',
                          			expirationDate: 'Ablaufdatum',
                          			purpose: 'Zweck'
                                },
                                body: [
                                    {
                                       name: '_ga',
                                       domain: 'presenterra.blog',
                                       path: '/',
                                       expirationDate: '2025-10-26T08:39:19.986Z',
                                       purpose: 'Wird von Google Analytics verwendet, um Benutzer zu identifizieren.'
                                    },
                                    {
                                      name: '_ga_43TG8834BK',
                                      domain: 'presenterra.blog',
                                      path: '/',
                                      expirationDate: '2025-10-26T08:39:19.985Z',
                                      purpose: 'Wird von Google Analytics verwendet, um die Sitzungsdaten zu speichern.'
                                  	},
                                  	{
                                      name: '_ga_YH9EXZL2QG',
                                      domain: 'presenterra.blog',
                                      path: '/',
                                      expirationDate: '2025-10-26T08:39:19.981Z',
                                      purpose: 'Wird von Google Analytics verwendet, um Daten über die Nutzung der Website zu sammeln.'
                                  	}
                                ]
                            }
                        },
                        {
                            title: 'Weitere Informationen',
                            description: 'Bei Fragen zu meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten <a href="mailto:info@presenterra.de">kontaktieren</a> Sie uns bitte.'
                        }
                    ]
                }
            }
        }
    }
  });
});
