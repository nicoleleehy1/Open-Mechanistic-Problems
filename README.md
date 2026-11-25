# Mechanistic Interpretability: A Lab Notebook

I'm learning mechanistic interpretability from scratch by working through
Neel Nanda's [200 Concrete Open Problems in Mechanistic Interpretability](https://www.alignmentforum.org/s/yivyHaCAmMJ3CqSyj).
This repo is a record of everything I learn, including all my code, my notes, and what I find.

**Website:**


## The experiments

| # | Notebook | Technique | What it finds |
| --- | --- | --- | --- |
| 01 | [01_pytorch_basics.ipynb](experiments/01_pytorch_basics.ipynb) | does the 3blue1brown network learn edges? (MNIST, weight visualization) | _in progress_ |

### Running the notebooks
- Open any notebook in Google Colab (on GitHub, swap `github.com` for `colab.research.google.com/github` in the URL), or
- Run them locally: `pip install -r requirements.txt`, then `jupyter notebook experiments/`

## The field guide
- [Getting-started roadmap](docs/mech-interp/roadmap.mdx): the path I'm following, from ML basics to TransformerLens
- [Findings](docs/mech-interp/findings.mdx): the write-up for the open problem I chose
- [Notes](docs/mech-interp/notes/): dated lab notes

## Project structure
```
experiments/          Jupyter notebooks, one per experiment (saved with outputs)
docs/mech-interp/     The website's pages
  findings.mdx        Write-up of my chosen problem
  experiments.mdx     Table of all notebooks
  roadmap.mdx         Getting-started roadmap
  notes/              Dated notes, one file per day or session
static/img/figures/   Plots used on the website
requirements.txt      Python packages for the notebooks
```

## Website (Docusaurus)
```bash
npm install     # first time only
npm start       # preview at http://localhost:3000
npm run build   # check everything builds
```

<!-- ## What's next
- Finish the ML prerequisites (train an MNIST network)
- Build GPT-2 from scratch
- Work through ARENA's transformer interpretability chapter
- Pick an A-rated problem -->
