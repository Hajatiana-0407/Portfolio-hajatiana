import { FaBootstrap, FaSymfony } from 'react-icons/fa'
import { SiCodeigniter, SiJquery } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
export const Projets = [
    {
        id: 1,
        title: 'Softio-app',
        description: 'Un logiciel qui permet de suivre les stocks en temps réel, de gérer les ventes, les approvisionnements et bien d’autres fonctionnalités essentielles à la bonne gestion d’un commerce.',
        technos: [
            {
                icon: <FaBootstrap />,
                nom: 'Bootstrap'
            },
            {
                icon: <SiJquery />,
                nom: 'JQuery'
            },
            {
                icon: <SiCodeigniter />,
                nom: 'Codeigniter'
            },
            {
                icon: <DiMysql />,
                nom: 'MySql'
            },
        ],
        image: "assets/images/projets/softio_img.png",
        logo: {
            dark: 'assets/images/projets/sa-logo-dark.png',
            light: 'assets/images/projets/sa-logo-light.png'
        },
        link: 'https://softio-app.com/',
        details: <>
            <p>
                Ce logiciel de gestion complet a été conçu pour répondre aux besoins spécifiques de l'entreprise en matière de pilotage des activités commerciales, logistiques et administratives. Grâce à une interface organisée et intuitive, il facilite la navigation entre les différentes fonctionnalités et optimise la gestion quotidienne.
            </p>

            <p>Il permet notamment :</p>

            <ul >
                <li>– <strong>la gestion des ventes</strong>, incluant les paiements, les factures proforma, les listes de vente, et les modes de règlement </li>
                <li>– <strong>la génération automatique des factures à partir des bons de commande</strong>, assurant un gain de temps et une réduction des erreurs de saisie </li>
                <li>– <strong>la création de codes-barres</strong> pour chaque produit ajouté, facilitant l’identification, le référencement et le passage en caisse </li>
                <li>– <strong>la gestion de stock</strong> avec un suivi précis des produits, des approvisionnements, des inventaires, des transferts entre dépôts, et la gestion des lieux de stockage</li>
                <li>– <strong>la gestion des clients</strong>, permettant l’ajout de nouveaux profils et le suivi de la relation client </li>
                <li>– <strong>la gestion des fournisseurs</strong>, centralisant les informations utiles pour les opérations d’achat </li>
                <li>– <strong>la gestion des utilisateurs</strong>, pour un contrôle sécurisé des accès et des droits selon les rôles </li>
                <li>– <strong>l’accès à un module de tutoriel</strong>, facilitant la prise en main rapide du logiciel par les utilisateurs.</li>
            </ul>

            <p>
                Cette solution centralise les opérations essentielles de l’entreprise dans un seul outil cohérent, assurant un gain de temps, une meilleure traçabilité et un contrôle rigoureux des processus. Elle constitue un appui stratégique pour une gestion moderne, automatisée et performante.
            </p>
        </>


    },
    {
        id: 2,
        title: 'Haute-zone Madagascar',
        description: 'Logiciel de gestion des ventes d’offres internet, de cartes SIM et de produits télécom.Il centralise les opérations de distribution et facilite le suivi des stocks et clients',
        technos: [
            {
                icon: <FaBootstrap />,
                nom: 'Bootstrap'
            },
            {
                icon: <SiJquery />,
                nom: 'JQuery'
            },
            {
                icon: <SiCodeigniter />,
                nom: 'Codeigniter'
            },
            {
                icon: <DiMysql />,
                nom: 'MySql'
            },
        ],
        image: "assets/images/projets/hautezone.png",
        logo: {
            dark: 'assets/images/projets/hz-logo-dark.png',
            light: 'assets/images/projets/hz-logo-light.png'
        },

        link: null,
        details: <>
            <p>
                Développé pour la société <strong>Haute-Zone Madagascar</strong>, ce logiciel de gestion regroupe un ensemble de fonctionnalités essentielles destinées à optimiser les opérations commerciales, techniques et administratives.
            </p>

            <p>Il permet la facturation ainsi que :</p>

            <div>– <strong>la gestion des ventes et des locations</strong>,</div>
            <div>– <strong>l’organisation des postes des agents</strong>,</div>
            <div>– <strong>un suivi rigoureux des stocks</strong>, des approvisionnements, des prix, des points de vente, du matériel, des cartes SIM et des modes de paiement,</div>
            <div>– <strong>l’édition de factures de vente</strong>,</div>
            <div>– <strong>la gestion des abonnements WiFi</strong> : lignes, offres, tarifs et échéances,</div>
            <div>– <strong>la gestion des personnels et des clients</strong>, assurant ainsi une coordination efficace des ressources humaines et une relation client structurée.</div>

            <p>
                Grâce à une interface claire et intuitive, cette solution garantit un gain de temps, une meilleure organisation et une traçabilité optimale de toutes les opérations internes. Conçu avec rigueur et en adéquation avec les besoins spécifiques de l’entreprise, ce logiciel constitue un outil fiable et évolutif pour un pilotage simplifié de l’activité.
            </p>

        </>
    },
    // {
    //     id: 3,
    //     title: 'Gestion d\'école',
    //     description: 'Plateforme complète de gestion scolaire, conçue pour automatiser les processus administratifs d’un établissement.',
    //     technos: [
    //         <><SiJquery />JQuery</>,
    //         <><FaSymfony />Symfony</>,
    //         <><DiMysql />MySql</>,
    //     ],
    //     image: "assets/images/projets/gestionEcole.png",
    //     logo: ''
    // },
]