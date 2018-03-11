# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Chatroom.destroy_all
Participation.destroy_all
me = User.create!({email_address: 'laurette@fun.org', username: 'smeagol92', real_name: 'Laurette', password: 'hotsauce23'})
general = Chatroom.create!({creator_id: me.id, isDM: false, title: 'general'})
Participation.create!({participant_id: me.id, chatroom_id: general.id})

jake = User.create!({email_address: 'jake@fake.com', username: 'tinynails08', password: 'christmastime'})
maurice = User.create!({email_address: 'maurice@maurice.com', username: 'maurice00', password: 'mrkrabs'})
elon = User.create!({email_address: 'elonmusk@spacex.org', username: 'teslaqueen', real_name: 'Elon Musk', password: 'spaceisgood'})
dan = User.create!({email_address: 'dan@bu.edu', username: 'loophole42', password: 'cookies'})
charlie = User.create!({email_address: 'charlie@charles.org', username: 'chunks', password: 'ihatestarwars'})
aislinn = User.create!({email_address: 'aislinn@hotmail.edu', username: 'iheartkevin', password: 'puppies'})
tom = User.create!({email_address: 'tom@illuminati.net', username: 'gigglemonster93', password: 'imcute01'})
mary = User.create!({email_address: 'mary@mary.com', username: 'owlgrl39', real_name: 'Mary Seo', password: 'pokequeen'})
sam = User.create!({email_address: 'sam@github.edu', username: 'partyonsaturday', password: 'iheartbiking'})
elliot = User.create!({email_address: 'whatever@elliot.com', username: 'ramrod', password: 'password'})
hanhee = User.create!({email_address: 'asdf', username: 'asdf', password: 'asdfasdf'})

# Channels
first = Chatroom.create!({creator_id: me.id, isDM: false, title: 'first ever!'})
second = Chatroom.create!({creator_id: me.id, isDM: false, title: 'second ever!'})
third = Chatroom.create!({creator_id: jake.id, isDM: false, title: 'third'})
fourth = Chatroom.create!({creator_id: elon.id, isDM: false, title: 'spaceisgood'})
fifth = Chatroom.create!({creator_id: tom.id, isDM: false, title: 'hot singles'})
firstdm = Chatroom.create!({creator_id: me.id, isDM: true, title: "#{sam.username}, #{me.username}"})
jakeself = Chatroom.create!({creator_id: jake.id, isDM: true, title: "#{jake.username} (you)"})
mauriceself = Chatroom.create!({creator_id: maurice.id, isDM: true, title: "#{maurice.username} (you)"})
elonself = Chatroom.create!({creator_id: elon.id, isDM: true, title: "#{elon.username} (you)"})
danself = Chatroom.create!({creator_id: dan.id, isDM: true, title: "#{dan.username} (you)"})
charlieself = Chatroom.create!({creator_id: charlie.id, isDM: true, title: "#{charlie.username} (you)"})
aislinnself = Chatroom.create!({creator_id: aislinn.id, isDM: true, title: "#{aislinn.username} (you)"})
tomself = Chatroom.create!({creator_id: tom.id, isDM: true, title: "#{tom.username} (you)"})
maryself = Chatroom.create!({creator_id: mary.id, isDM: true, title: "#{mary.username} (you)"})
samself = Chatroom.create!({creator_id: sam.id, isDM: true, title: "#{sam.username} (you)"})
elliotself = Chatroom.create!({creator_id: elliot.id, isDM: true, title: "#{elliot.username} (you)"})
hanheeself = Chatroom.create!({creator_id: hanhee.id, isDM: true, title: "#{hanhee.username} (you)"})
meself = Chatroom.create!({creator_id: me.id, isDM: true, title: "#{me.username} (you)"})


# Participation associations
Participation.create!({participant_id: me.id, chatroom_id: first.id})
Participation.create!({participant_id: jake.id, chatroom_id: general.id})
Participation.create!({participant_id: maurice.id, chatroom_id: general.id})
Participation.create!({participant_id: elon.id, chatroom_id: general.id})
Participation.create!({participant_id: dan.id, chatroom_id: general.id})
Participation.create!({participant_id: charlie.id, chatroom_id: general.id})
Participation.create!({participant_id: aislinn.id, chatroom_id: general.id})
Participation.create!({participant_id: tom.id, chatroom_id: general.id})
Participation.create!({participant_id: mary.id, chatroom_id: general.id})
Participation.create!({participant_id: sam.id, chatroom_id: general.id})
Participation.create!({participant_id: elliot.id, chatroom_id: general.id})
Participation.create!({participant_id: hanhee.id, chatroom_id: general.id})
Participation.create!({participant_id: sam.id, chatroom_id: firstdm.id})
