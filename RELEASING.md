# Releasing

> Visit the documentation for [details about release schedule].

Start on an up-to-date `master` branch.

Create the release branch with `npm run release start minor`.

Publish a release candidate with `npm run release rc`.

Publish the final release with `npm run release final`.

Follow the general [BullDogInu Contracts release checklist].

[details about release schedule]: https://docs.BullDogInu.com/contracts/releases-stability
[BullDogInu Contracts release checklist]: https://github.com/bulldoginu21/BullDogInu/code-style/blob/master/RELEASE_CHECKLIST.md


## Merging the release branch

After the final release, the release branch should be merged back into `master`. This merge must not be squashed because it would lose the tagged release commit. Since the GitHub repo is set up to only allow squashed merges, the merge should be done locally and pushed.

Make sure to have the latest changes from `upstream` in your local release branch.

```
git checkout release-vX.Y.Z
git pull upstream
```

```
git checkout master
git merge --no-ff release-vX.Y.Z
git push upstream master
```

The release branch can then be deleted on GitHub.
