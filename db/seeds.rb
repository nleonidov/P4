# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Yogurt.destroy_all
Topping.destroy_all
Flavor.destroy_all

@flavor1 = Flavor.create!(name: 'Vanilla')
@flavor2 = Flavor.create!(name: 'Strawberry')
@flavor3 = Flavor.create!(name: 'Chocolate')
@flavor4 = Flavor.create!(name: 'Salted Caramel')
@flavor5 = Flavor.create!(name: 'Cake Batter')
@flavor6 = Flavor.create!(name: 'Red Velvet')
@flavor7 = Flavor.create!(name: 'Espresso')
@flavor8 = Flavor.create!(name: 'Mint Chip')
@flavor9 = Flavor.create!(name: 'Oreo')
@flavor10 = Flavor.create!(name: 'Raspberry')
@flavor11 = Flavor.create!(name: 'Banana')
@flavor12 = Flavor.create!(name: 'Watermelon')
@flavor13 = Flavor.create!(name: 'Custard',)
@flavor14 = Flavor.create!(name: 'Toffee')
@flavor15 = Flavor.create!(name: 'Peanut Butter')

puts "#{Flavor.count} flavors created"

@topping1 = Topping.create!(name: 'Sprinkles')
@topping2 = Topping.create!(name: 'Caramel')
@topping3 = Topping.create!(name: 'Hot Fudge')
@topping4 = Topping.create!(name: 'Marshmallow')
@topping5 = Topping.create!(name: 'Cookie Dough')
@topping6 = Topping.create!(name: 'Gummy Bears')
@topping7 = Topping.create!(name: 'Oreos')
@topping8 = Topping.create!(name: 'Strawberries')
@topping9 = Topping.create!(name: 'Kiwi')
@topping10 = Topping.create!(name: 'Blueberries')
@topping11 = Topping.create!(name: 'Mango')
@topping12 = Topping.create!(name: 'Boba')
@topping13 = Topping.create!(name: 'Graham cracker')
@topping14 = Topping.create!(name: 'Pineapple')
@topping15 = Topping.create!(name: 'Brownie')

puts "#{Topping.count} toppings created"

Yogurt.create!(name: 'Brookie Batter', flavor: @flavor5, toppings: [@topping5, @topping15, @topping3])

puts "#{Yogurt.count} yogurts created"