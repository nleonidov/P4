# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@flavor1 = Flavor.create!(name: 'vanilla')
@flavor2 = Flavor.create!(name: 'strawberry')
@flavor3 = Flavor.create!(name: 'chocolate')
@flavor4 = Flavor.create!(name: 'salted caramel')
@flavor5 = Flavor.create!(name: 'cake batter')
@flavor6 = Flavor.create!(name: 'red velvet')
@flavor7 = Flavor.create!(name: 'espresso')
@flavor8 = Flavor.create!(name: 'mint chip')
@flavor9 = Flavor.create!(name: 'oreo')
@flavor10 = Flavor.create!(name: 'raspberry')
@flavor11 = Flavor.create!(name: 'banana')
@flavor12 = Flavor.create!(name: 'watermelon')
@flavor13 = Flavor.create!(name: 'custard',)
@flavor14 = Flavor.create!(name: 'toffee')
@flavor15 = Flavor.create!(name: 'peanut butter')

puts "#{Flavor.count} flavors created"

@topping1 = Topping.create!(name: 'sprinkles')
@topping2 = Topping.create!(name: 'caramel')
@topping3 = Topping.create!(name: 'hot fudge')
@topping4 = Topping.create!(name: 'marshmallow')
@topping5 = Topping.create!(name: 'cookie dough')
@topping6 = Topping.create!(name: 'gummy bears')
@topping7 = Topping.create!(name: 'oreos')
@topping8 = Topping.create!(name: 'strawberries')
@topping9 = Topping.create!(name: 'kiwi')
@topping10 = Topping.create!(name: 'blueberries')
@topping11 = Topping.create!(name: 'mango')
@topping12 = Topping.create!(name: 'boba')
@topping13 = Topping.create!(name: 'graham cracker')
@topping14 = Topping.create!(name: 'pineapple')
@topping15 = Topping.create!(name: 'brownie')

puts "#{Topping.count} toppings created"

Yogurt.create!(name: 'best yogurt', flavor: @flavor5, toppings: [@topping5, @topping15, @topping3])

puts "#{Yogurt.count} yogurts created"