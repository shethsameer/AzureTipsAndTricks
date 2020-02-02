(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{408:function(e,t,o){"use strict";o.r(t);var a=o(43),i=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/machine-learning/service/overview-what-is-azure-ml?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning Overview"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"guided-tour-of-azure-machine-learning-studio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#guided-tour-of-azure-machine-learning-studio","aria-hidden":"true"}},[e._v("#")]),e._v(" Guided tour of Azure Machine Learning Studio")]),e._v(" "),o("p",[e._v("In a world where there are WYSIWIG editors for practically everything, have you ever wondered why there isn’t a drag-and-drop web app for machine learning? Well, actually there is: "),o("a",{attrs:{href:"https://studio.azureml.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning Studio"),o("OutboundLink")],1),e._v(". Today, I want to give you a personal tour of ML Studio and give you an idea of just how much you can do without writing a lick of code.")]),e._v(" "),o("h5",{attrs:{id:"no-programming-required"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-programming-required","aria-hidden":"true"}},[e._v("#")]),e._v(" No programming required")]),e._v(" "),o("p",[e._v("If it makes the tool more approachable, you could think of Azure ML Studio as the low bar for machine learning that makes it easy for everyone to get into AI. I like to think of it more simply as a playroom where I do experiments with machine learning that no else needs to see.")]),e._v(" "),o("p",[e._v("ML Studio has a completely "),o("a",{attrs:{href:"https://azure.microsoft.com/pricing/details/machine-learning-studio?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free tier"),o("OutboundLink")],1),e._v(" that gives you two hours of compute a month so you aren’t racking up a bill while you are trying things out. You’ll want to take advantage of that.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/mlstudio_dash.png")}}),e._v(" "),o("p",[e._v("The ML Studio home screen is called your workspace. This is where you’ll collect goodies like datasets, predictive models, experiments, and notebooks, which you can organize under different projects.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Projects")]),e._v(" are collections of experiments, datasets, notebooks, and other resources.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Experiments")]),e._v(" are what you create with the drag-and-drop tool.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Web services")]),e._v(" are deployed from your experiments.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Notebooks")]),e._v(" are "),o("a",{attrs:{href:"https://jupyter.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jupyter"),o("OutboundLink")],1),e._v(" notebooks where you collect code snippets, equations, links, and figures. It’s awesome.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Datasets")]),e._v(" are really important in machine learning, since your predictions are only as good as the data you work with. Fortunately, ML Studio gives you access to lots of interesting datasets.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Trained models")]),e._v(" are your machine learning output. You plug them into your apps.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Settings")]),e._v(" hold your account configuration.")])])]),e._v(" "),o("p",[e._v("There are lots of great things in the ML Studio home screen, but I want to call out two in particular.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/experiment_dragdrop.gif")}}),e._v(" "),o("p",[e._v("First, the "),o("strong",[e._v("Experiments")]),e._v(" tab is where you put together a machine learning project visually and with no actual code. This is one of the best ways to learn machine learning by playing around and seeing how things connect together. The tray to the left of your work area gives you access to algorithms, data, and workflows you can pull into your experiment. Let’s take a closer look at some of the functionality packaged there for you.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/saved_datasets.png")}}),e._v(" "),o("p",[e._v("To work with machine learning, your first step is always going to be to find training data to work with. The easiest thing to do is to expand the Saved Datasets node in the navigation window and drag one of the Sample datasets, like “Movie Ratings”, into your experiment.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/select_columns.png")}}),e._v(" "),o("p",[e._v("The Data Transformation node in the navigation window gives you a lot of choices in how to select and filter your datasets. You can drag “Select Columns in Dataset” into your experiment and draw an arrow to it from Movie Ratings to add it into your workflow and pick some data columns to use.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/run_experiment.png")}}),e._v(" "),o("p",[e._v("To complete a rudimentary experiment, add "),o("strong",[e._v("Machine Learning | Train Model")]),e._v(" as the next step in your workflow and select "),o("strong",[e._v("Machine Learning | Initialize Model | Classification | Two-Class Neural Network")]),e._v(" as the kind of learning algorithm you want to create. Finally score and evaluate your model by adding those nodes and "),o("strong",[e._v("Run")]),e._v(" your experiment.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/visualize_evaluation.png")}}),e._v(" "),o("p",[e._v("To see how good your model is, left click on the "),o("strong",[e._v("Evaluate Model")]),e._v(" module and select "),o("strong",[e._v("Visualize")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/eval_results.png")}}),e._v(" "),o("p",[e._v("This will now show you how good your machine learning algorithm is (hint, not very good in this case). There are several things you can do next to improve your model like splitting off some of your data for training and some of it for scoring, but I’ll leave that to you to experiment with.")]),e._v(" "),o("h5",{attrs:{id:"write-this-down"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#write-this-down","aria-hidden":"true"}},[e._v("#")]),e._v(" Write this down")]),e._v(" "),o("p",[e._v("The other thing I especially want to highlight is the "),o("strong",[e._v("Notebooks")]),e._v(" tab. It took me a long time to understand how cool Jupyter Notebook is, and I don’t want you to miss out like I did.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/jupyter.png")}}),e._v(" "),o("p",[e._v("As you can see above, it looks like a scientist’s book of secret formulas. What makes it extra neat is that it’s also an application that can run live code, create visualizations, clean data, and even make predictive models for you. Jupyter Notebook is a broadly used tool in the world of data science. Whether you plan to use ML Studio or not, you should still make a point to become familiar with it.")]),e._v(" "),o("h5",{attrs:{id:"the-gallery-is-your-friend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-gallery-is-your-friend","aria-hidden":"true"}},[e._v("#")]),e._v(" The gallery is your friend")]),e._v(" "),o("p",[e._v("Still intimidated? That’s okay. The "),o("a",{attrs:{href:"https://gallery.azure.ai'",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AI Gallery"),o("OutboundLink")],1),e._v('"> has many prebuilt experiments written by other people that you can simply load into your workspace and modify to learn.')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/gallery_ui.png")}}),e._v(" "),o("p",[e._v("When you browse the AI Gallery and find an experiment you like, just click on the "),o("strong",[e._v("Open in Studio")]),e._v(" button to conveniently copy the whole thing directly into ML Studio. Give it a shot. Until we finally get to the point where AI is training our models for us, using drag-and-drop in Azure ML Studio may be the best thing going.")])])},[],!1,null,null,null);t.default=i.exports}}]);