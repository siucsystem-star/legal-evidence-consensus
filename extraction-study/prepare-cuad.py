"""Build the train/test split files from the official CUAD v1 release.

Usage:
    git clone https://github.com/TheAtticusProject/cuad.git
    (cd cuad && git checkout 67faa0e6023b04fcaae6cc09497ab00e5d63a2a2 && unzip data.zip -d data)
    python3 -I extraction-study/prepare-cuad.py cuad/data out/

Outputs out/train.json (408 contracts) and out/test.json (102 contracts, the
authors' own test split). Each record keeps the full contract text and, for the
three studied categories, the expert answer spans. Hashes of the inputs and
outputs are printed so they can be compared with PREREGISTRATION.json.

CUAD is (c) The Atticus Project, licensed CC BY 4.0. This repository does not
redistribute it; this script rebuilds the derived files locally.
"""
import hashlib, json, os, sys

CATS = ["Governing Law", "Renewal Term", "Notice Period To Terminate Renewal"]
EXPECTED = {
    "CUADv1.json": "ed0b77d85bdf4014d7495800e8e4a70565b48ee6f8a2e5dca9cf8655dbf10eae",
    "test.json": "007b6a40b0c65247f881627375c3d2e9b6aeeb5dfa89957494feed0765a1a073",
}

def sha(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()

def record(doc):
    p = doc["paragraphs"][0]
    out = {"title": doc["title"], "text": p["context"], "gold": {}}
    for q in p["qas"]:
        cat = q["id"].split("__")[-1]
        if cat in CATS:
            out["gold"][cat] = [{"start": a["answer_start"], "text": a["text"]} for a in q["answers"]]
    return out

def main(src, dst):
    for name, h in EXPECTED.items():
        got = sha(os.path.join(src, name))
        if got != h:
            sys.exit(f"{name}: sha256 {got} does not match the preregistered {h}")
    full = json.load(open(os.path.join(src, "CUADv1.json")))["data"]
    test = json.load(open(os.path.join(src, "test.json")))["data"]
    test_titles = {d["title"] for d in test}
    train = [record(d) for d in full if d["title"] not in test_titles]
    test_records = [record(d) for d in test]
    os.makedirs(dst, exist_ok=True)
    for name, data in (("train.json", train), ("test.json", test_records)):
        path = os.path.join(dst, name)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, sort_keys=True)
        print(name, len(data), sha(path))
    for name, titles in (("train", [d["title"] for d in train]), ("test", sorted(test_titles))):
        listing = "\n".join(sorted(titles)) + "\n"
        print(name + "_titles", hashlib.sha256(listing.encode()).hexdigest())

if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
