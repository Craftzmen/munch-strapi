"use strict";
(self["webpackChunkstrapi_demo"] = self["webpackChunkstrapi_demo"] || []).push([[8329],{

/***/ 58076:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"Booleskt värde","attribute.boolean.description":"Ja eller nej, 1 eller 0, sant eller falskt","attribute.component":"Komponent","attribute.component.description":"Grupp av fält du kan återanvända och repetera","attribute.customField":"Anpassat fält","attribute.date":"Datum","attribute.date.description":"En datumväljare med sekunder, minuter och timmar","attribute.datetime":"Datum och tid","attribute.dynamiczone":"Dynamisk zon","attribute.dynamiczone.description":"Dynamiskt välj mellan förutbestämda komponenter när du skapar innehåll","attribute.email":"E-post","attribute.email.description":"E-postadressfält med validering","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Förutbestämda värden som man kan välja mellan","attribute.json":"JSON","attribute.json.description":"Data i JSON-format","attribute.media":"Media","attribute.media.description":"Filer såsom bilder, videos, m.m","attribute.null":" ","attribute.number":"Nummer","attribute.number.description":"Nummer (heltal och decimaltal)","attribute.password":"Lösenord","attribute.password.description":"Lösenordsfält med kryptering","attribute.relation":"Relation","attribute.relation.description":"Refererar till en samlingstyp","attribute.richtext":"Formaterad text","attribute.richtext.description":"En textredigerare med formatalternativ","attribute.text":"Text","attribute.text.description":"Kort och lång text såsom titel eller beskrivning","attribute.time":"Tid","attribute.timestamp":"Tidstämpel","attribute.uid":"UID","attribute.uid.description":"Unik identifierare","button.attributes.add.another":"Lägg till nytt fält","button.component.add":"Lägg till en komponent","button.component.create":"Skapa komponent","button.model.create":"Skapa samlingstyp","button.single-types.create":"Skapa engångstyp","component.repeatable":"(repeterbar)","components.SelectComponents.displayed-value":"{number, plural, =0 {# komponenter} one {# komponent} other {# komponenter}} valda","components.componentSelect.no-component-available":"Du har redan lagt till alla dina komponenter","components.componentSelect.no-component-available.with-search":"Det finns inga komponenter matchande sökningen","components.componentSelect.value-component":"{number} komponenter valda (skriv för att söka efter en komponent)","components.componentSelect.value-components":"{number} komponenter valda","configurations":"Konfigurationer","contentType.apiId-plural.description":"Pluraliserat API-ID","contentType.apiId-plural.label":"API ID (Plural)","contentType.apiId-singular.description":"UID:t används för att generera API-rutterna och databastabellerna","contentType.apiId-singular.label":"API ID (Singular)","contentType.collectionName.description":"Användbart när namnet på din innehållstyp och din tabell är olika","contentType.collectionName.label":"Samlingsnamn","contentType.displayName.label":"Visningsnamn","contentType.draftAndPublish.description":"Skapa ett utkast av varje inlägg innan det publiceras","contentType.draftAndPublish.label":"Utkast/publiceringssystem","contentType.kind.change.warning":"Du ändrade typen på en innehållstyp: API:n kommer återskapas (rutter, kontroller, och tjänster kommer bli överskrivna).","error.attributeName.reserved-name":"Namnet kan inte användas för att det kan påverka annan funktionalitet","error.contentType.pluralName-used":"Värdet kan inte vara samma som namnet i singular","error.contentType.singularName-used":"Värdet kan inte vara samma som det pluraliserade namnet","error.contentTypeName.reserved-name":"Namnet kan inte användas i ditt projekt för att det kan påverka annan funktionalitet","error.validation.enum-duplicate":"Dubblettvärden är inte tillåtna (endast alfanumeriska tecken kontrolleras).","error.validation.enum-empty-string":"Tomma strängar är inte tillåtna","error.validation.enum-regex":"Minst ett värde är ogiltigt. Värden ska ha minst ett alfabetiskt tecken före det första talet.","error.validation.minSupMax":"Can\'t be superior","error.validation.positive":"Måste vara ett positivt tal","error.validation.regex":"Regex-mönstret är ogiltigt","error.validation.relation.targetAttribute-taken":"Detta namn existerar i målet","form.attribute.component.option.add":"Lägg till en komponent","form.attribute.component.option.create":"Skapa en komponent","form.attribute.component.option.create.description":"En komponent delas mellan innehållstyper och komponenter, och är tillgänglig överallt.","form.attribute.component.option.repeatable":"Repeterbar komponent","form.attribute.component.option.repeatable.description":"Bäst för flera t.ex ingredienser, metataggar m.m. (listor)","form.attribute.component.option.reuse-existing":"Använd en befintlig komponent","form.attribute.component.option.reuse-existing.description":"Återanvänd en komponent som redan har skapats för att hålla datastrukturen samma över flera innehållstyper.","form.attribute.component.option.single":"Engångskomponent","form.attribute.component.option.single.description":"Bäst för att gruppera fält som adress, huvudinnehåll, etc...","form.attribute.item.customColumnName":"Anpassade kolumnnamn","form.attribute.item.customColumnName.description":"Kan användas för att anpassa hur datan ser ut i API-svar","form.attribute.item.date.type.date":"datum (t.ex: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"datum och tid (t.ex: 01/01/{currentYear} 00:00)","form.attribute.item.date.type.time":"tid (t.ex: 00:00)","form.attribute.item.defineRelation.fieldName":"Fältnamn","form.attribute.item.enumeration.graphql":"Namnändring för GraphQL","form.attribute.item.enumeration.graphql.description":"Låter dig ändra det genererade namnet i GraphQL","form.attribute.item.enumeration.placeholder":"Ex:\\nmorgon\\nmiddag\\nkväll","form.attribute.item.enumeration.rules":"Värden (ett värde per rad)","form.attribute.item.maximum":"Största värde","form.attribute.item.maximumLength":"Längsta längd","form.attribute.item.minimum":"Minsta värde","form.attribute.item.minimumLength":"Kortaste längd","form.attribute.item.number.type":"Nummerformat","form.attribute.item.number.type.biginteger":"stort heltal (t.ex: 123456789)","form.attribute.item.number.type.decimal":"decimaltal (t.ex: 2.22)","form.attribute.item.number.type.float":"flyttal (t.ex: 3.33333333)","form.attribute.item.number.type.integer":"heltal (t.ex: 10)","form.attribute.item.privateField":"Privat fält","form.attribute.item.privateField.description":"Detta fält kommer inte att visas i API-svar","form.attribute.item.requiredField":"Obligatoriskt fält","form.attribute.item.requiredField.description":"Du kommer inte kunna skapa posten om detta fältet är tomt","form.attribute.item.text.regex":"RegEx-mönster","form.attribute.item.text.regex.description":"Texten för RegEx-mönstret","form.attribute.item.uniqueField":"Unikt fält","form.attribute.item.uniqueField.description":"Du kommer inte kunna skapa posten om det redan finns en annan post med samma värde","form.attribute.media.allowed-types":"Välj tillåtna typer av medier","form.attribute.media.allowed-types.option-files":"Filer","form.attribute.media.allowed-types.option-images":"Bilder","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Flera medier","form.attribute.media.option.multiple.description":"Tillåter flera medier att väljas i samma fält, passar bra för t.ex bildgallerier","form.attribute.media.option.single":"En media","form.attribute.media.option.single.description":"Bäst för profilbilder eller andra bilder som bara förekommer en gång per post","form.attribute.settings.default":"Standardvärde","form.attribute.text.option.long-text":"Lång text","form.attribute.text.option.long-text.description":"Bäst för beskrivningar eller andra längre texter. Fulltextsökning är inaktiverat.","form.attribute.text.option.short-text":"Kort text","form.attribute.text.option.short-text.description":"Bäst för titlar, namn, länkar (URL:er). Aktiverar fulltextsökning sökning för fältet.","form.button.add-components-to-dynamiczone":"Lägg till komponenter till dynamiska zonen","form.button.add-field":"Lägg till nytt fält","form.button.add-first-field-to-created-component":"Lägg till första fältet i komponenten","form.button.add.field.to.collectionType":"Lägg till ett nytt fält i samlingstypen","form.button.add.field.to.component":"Lägg till ett nytt fält i komponenten","form.button.add.field.to.contentType":"Lägg till ett nytt fält i innehållstypen","form.button.add.field.to.singleType":"Lägg till ett nytt fält i engångstypen","form.button.cancel":"Avbryt","form.button.collection-type.description":"Bäst för flera poster såsom artiklar, produkter och kommentarer.","form.button.collection-type.name":"Samlingstyper","form.button.configure-component":"Konfigurera komponenten","form.button.configure-view":"Konfigurera visningen","form.button.select-component":"Välj en komponent","form.button.single-type.description":"Bäst för poster som bara förekommer en gång såsom startsida, om oss, m.m.","form.button.single-type.name":"Engångstyper","from":"från","listView.headerLayout.description":"Skapa datastrukturen för ditt innehåll","menu.section.components.name":"Komponenter","menu.section.models.name":"Samlingstyper","menu.section.single-types.name":"Engångstyper","modalForm.attribute.form.base.name.description":"Mellanslag tillåts inte i namnet på attributet","modalForm.attribute.form.base.name.placeholder":"t.ex titel, slug, canonicalUrl","modalForm.attribute.target-field":"Kopplat fält","modalForm.attributes.select-component":"Välj komponent","modalForm.attributes.select-components":"Välj komponenter","modalForm.collectionType.header-create":"Skapa samlingstyp","modalForm.component.header-create":"Skapa komponent","modalForm.components.create-component.category.label":"Välj kategori eller ange namn på ny kategori","modalForm.components.icon.label":"Ikon","modalForm.empty.button":"Lägg till anpassade fält","modalForm.empty.heading":"Inget här ännu.","modalForm.empty.sub-heading":"Hitta det du letar efter genom ett brett utbud av tillägg.","modalForm.editCategory.base.name.description":"Inget mellanslag får finnas i namnet på kategorin","modalForm.header-edit":"Redigera {name}","modalForm.header.categories":"Kategorier","modalForm.singleType.header-create":"Skapa engångstyp","modalForm.sub-header.addComponentToDynamicZone":"Lägg till ny komponent till dynamisk zon","modalForm.sub-header.attribute.create":"Lägg till {type}-fält","modalForm.sub-header.attribute.create.step":"Lägg till ny komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Redigera {name}","modalForm.sub-header.chooseAttribute.collectionType":"Välj ett fält för samlingstypen","modalForm.sub-header.chooseAttribute.component":"Välj ett fält för komponenten","modalForm.sub-header.chooseAttribute.singleType":"Välj ett fält för engångstypen","modalForm.custom-fields.advanced.settings.extended":"Utökade inställningar","modalForm.tabs.custom":"Anpassat","modalForm.tabs.custom.howToLink":"Hur du lägger till anpassade fält","modalForm.tabs.default":"Standard","modalForm.tabs.label":"Standard/anpassade-flikar","modelPage.attribute.relation-polymorphic":"Relation (polymorfisk)","modelPage.attribute.relationWith":"Relation med","notification.error.dynamiczone-min.validation":"Minst en komponent måste vara vald för en dynamisk zon för att kunna spara innehållstypen","notification.info.autoreaload-disable":"autoReload-funktionen krävs för att använda detta plugin. Starta servern med `strapi develop`","notification.info.creating.notSaved":"Spara ditt arbete innan du skapar en ny samlingstyp eller komponent","plugin.description.long":"Modellera datastrukturen för ditt API. Skapa nya fält och relationer på bara en minut. Filerna skapas och uppdateras automatiskt i ditt projekt.","plugin.description.short":"Modellera datastrukturen för ditt API.","plugin.name":"Innehållstyps-skapare","popUpForm.navContainer.advanced":"Avancerade inställningar","popUpForm.navContainer.base":"Grundläggande inställningar","popUpWarning.bodyMessage.cancel-modifications":"Är du säker på att du vill avbryta dina ändringar?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Är du säker på att du vill avbryta dina ändringar? Vissa komponenter har skapats eller modifierats...","popUpWarning.bodyMessage.category.delete":"Är du säker på att du vill ta bort den här kategorin? Alla komponenter i den kommer också att raderas.","popUpWarning.bodyMessage.component.delete":"Är du säker på att du vill ta bort den här komponenten?","popUpWarning.bodyMessage.contentType.delete":"Är du säker på att du vill ta bort den här samlingstypen?","popUpWarning.draft-publish.button.confirm":"Ja, inaktiverar","popUpWarning.draft-publish.message":"Om du inaktiverar Utkast/Publicera-systemet kommer dina utkast att raderas.","popUpWarning.draft-publish.second-message":"Är du säker på att du vill inaktivera det?","prompt.unsaved":"Är du säker på att du vill lämna? Dina ändringar kommer att försvinna.","relation.attributeName.placeholder":"Ex: författare, kategori, tagg","relation.manyToMany":"har och tillhör många","relation.manyToOne":"har många","relation.manyWay":"har många","relation.oneToMany":"tillhör många","relation.oneToOne":"har och tillhör en","relation.oneWay":"har en","table.button.no-fields":"Lägg till nytt fält","table.content.create-first-content-type":"Skapa din första samlingstyp","table.content.no-fields.collection-type":"Lägg till ett första fält till samlingstypen","table.content.no-fields.component":"Lägg till ett första fält i komponenten"}');

/***/ })

}]);