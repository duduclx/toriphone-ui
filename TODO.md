## provider trunk template

https://github.com/wazo-communication/portal-plugins/tree/master


## Auth

si connexion avec un compte utilisateur
doit renvoyer une erreur et retour sur login !

## changer les logos
favicon
login logo
header logo

# header sidebar
ajouter le nom du serveur

## login page
reprendre celle du desktop
mais la modifier un peu pour monter que c'est de l'admin

## translation
virer tout ce qui n'est pas utile

## conference
pour activer les conférences, il faut
POST https://wazo.example.com/api/confd/1.1/ingresses/http
Wazo-Tenant: 74f8a451-2b38-4b74-bdfe-8137688cc1e5

{
  "uri": "https://wazo.example.com"
}
et
PUT https://wazo.example.com/api/confd/1.1/asterisk​/confbridge​/wazo_default_bridge

{
  ...
  "video_mode": "sfu",
  ...
}