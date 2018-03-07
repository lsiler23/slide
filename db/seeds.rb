# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!({email_address: 'laurette@fun.org', username: 'smeagol92', real_name: 'Laurette', password: 'hotsauce23'})
User.create!({email_address: 'jake@fake.com', username: 'tinynails08', password: 'christmastime'})
User.create!({email_address: 'maurice@maurice.com', username: 'maurice00', password: 'mrkrabs'})
User.create!({email_address: 'elonmusk@spacex.org', username: 'teslaqueen', real_name: 'Elon Musk', password: 'spaceisgood'})
User.create!({email_address: 'dan@bu.edu', username: 'loophole42', password: 'cookies'})
User.create!({email_address: 'charlie@charles.org', username: 'chunks', password: 'ihatestarwars'})
User.create!({email_address: 'aislinn@hotmail.edu', username: 'iheartkevin', password: 'puppies'})
User.create!({email_address: 'tom@illuminati.net', username: 'gigglemonster93', password: 'imcute01'})
User.create!({email_address: 'mary@mary.com', username: 'owlgrl39', real_name: 'Mary Seo', password: 'pokequeen'})
User.create!({email_address: 'sam@github.edu', username: 'partyonsaturday', password: 'iheartbiking'})
User.create!({email_address: 'whatever@elliot.com', username: 'ramrod', password: 'password'})
User.create!({email_address: 'asdf', username: 'asdf', password: 'asdfasdf'})
