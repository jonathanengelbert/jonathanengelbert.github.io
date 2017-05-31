#Jonathan Engebert
#A simple World Map displaying global population in 2010
#Another map will follow displaying the population in 2017,
# for comparisson


import json
from pygal.maps.world import World
from pygal.maps.world import COUNTRIES
from pygal.style import LightColorizedStyle as LCS, RotateStyle as RS



def get_country_code(country_name):
    """Return the Pygal 2-digit country code for the given country."""
    for code, name in COUNTRIES.items():
        if name == country_name:
            return code
    # If the country wasn't found, return None, to preventing
    # it from failing. Most files have incomplete/corrupt data.
    return None

# Load the data from the file into a list, so I can work wiht it
filename = 'population_data.json'
with open(filename) as f:
    pop_data = json.load(f)

# Build a dictionary of population data.
cc_populations = {}
for pop_dict in pop_data:
    if pop_dict['Year'] == '2010':
        country_name = pop_dict['Country Name']
        population = int(float(pop_dict['Value']))
        code = get_country_code(country_name)
        if code:
            cc_populations[code] = population

# Group the countries into 3 population levels.
cc_pops_1, cc_pops_2, cc_pops_3 = {}, {}, {}
for cc, pop in cc_populations.items():
    if pop < 10000000:
        cc_pops_1[cc] = pop
    elif pop < 1000000000:
        cc_pops_2[cc] = pop
    else:
        cc_pops_3[cc] = pop


# Choroleth map of proportions of the population
print(len(cc_pops_1), len(cc_pops_2), len(cc_pops_3))

wm_style = RS('#446699', base_style=LCS)
wm = World(style=wm_style)
wm.title = 'World Population in 2010, by Country'
wm.add('0-10m', cc_pops_1)
wm.add('10m-1bn', cc_pops_2)
wm.add('>1bn', cc_pops_3)

wm.render_to_file('world_population.svg')
